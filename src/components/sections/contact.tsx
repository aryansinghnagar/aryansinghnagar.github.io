'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { profile } from '@/lib/portfolio-data';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending');
    try {
      // Build a mailto: link as a no-backend fallback.
      // To enable Formspree: replace this block with:
      //   await fetch('https://formspree.io/f/YOUR_ID', {
      //     method: 'POST', headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(data),
      //   });
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      const subject = encodeURIComponent(data.subject);
      const mailtoUrl = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      window.open(mailtoUrl, '_self');

      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('sent');
      reset();
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border/30">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">06 / CONTACT</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Let&apos;s build something.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Open to AI Systems Engineering, Core ML Infrastructure, and High-Throughput Software
            Engineering roles at Tier-1 tech companies and frontier AI research labs. Available
            immediately, open to relocation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <ContactRow
              icon={Mail}
              label="Email"
              value="asn.dyrnwyn@gmail.com"
              href="mailto:asn.dyrnwyn@gmail.com"
            />
            <ContactRow
              icon={Phone}
              label="Phone"
              value="+91 782-775-6669"
              href="tel:+917827756669"
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value="India (Open to Relocation)"
            />
            <ContactRow
              icon={Github}
              label="GitHub"
              value="@aryansinghnagar"
              href="https://github.com/aryansinghnagar"
              external
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="aryan-singh-nagar"
              href="https://www.linkedin.com/in/aryan-singh-nagar-414675263"
              external
            />
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs font-mono uppercase tracking-wider">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-neon"
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-mono uppercase tracking-wider">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="you@company.com"
                    className="bg-background/50 border-border/50 focus:border-neon"
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider">
                  Subject
                </Label>
                <Input
                  id="subject"
                  {...register('subject')}
                  placeholder="Role opportunity / collaboration / etc."
                  className="bg-background/50 border-border/50 focus:border-neon"
                />
                {errors.subject && (
                  <p className="text-xs text-destructive">{errors.subject.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-mono uppercase tracking-wider">
                  Message
                </Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell me about the role, the team, and what you're building..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-neon resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full bg-neon text-background hover:bg-neon/90 font-medium glow-neon-soft disabled:opacity-50"
              >
                {status === 'sending' && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
                {status === 'sent' && <CheckCircle2 className="h-4 w-4 mr-2" />}
                {status === 'sending'
                  ? 'Opening mail client...'
                  : status === 'sent'
                    ? 'Email drafted — check your mail client'
                    : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
              </Button>

              <p className="text-xs text-muted-foreground text-center pt-2">
                Form opens your email client pre-filled. For direct Formspree integration, see the
                deployment guide.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3 p-4 rounded-md border border-border/40 bg-card/30 hover:border-neon/40 hover:bg-card/50 transition-all group">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neon/5 border border-neon/20 group-hover:bg-neon/10 transition-colors">
        <Icon className="h-4 w-4 text-neon" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-foreground font-medium truncate">{value}</div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }
  return content;
}
