'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, GraduationCap, Award, Quote } from 'lucide-react';
import { profile, stats } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">01 / ABOUT</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Engineering AI systems that ship.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-5"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m <span className="text-foreground font-medium">Aryan Singh Nagar</span> — an{' '}
              <span className="text-neon font-medium">AI/ML &amp; Systems Engineer</span> with a B.Tech in Electrical Engineering from{' '}
              <span className="text-foreground font-medium">IIT Bombay (2019–2025)</span>. My handle{' '}
              <span className="text-platinum font-mono">SilverFox</span> follows me across GitHub
              and personal projects — a signature of individuality in serious engineering work.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My recent work spans <span className="text-foreground">agentic LLM operating systems</span>{' '}
              (JoBot — multi-provider routing across Gemini, OpenAI, Anthropic, Ollama),{' '}
              <span className="text-foreground">multimodal engagement classifiers</span> at NimitAI
              (fusing facial expressions, speech cues, and acoustic features),{' '}
              <span className="text-foreground">cross-platform computer vision</span> (Maestro —
              ONNX Runtime with multi-backend GPU acceleration), and{' '}
              <span className="text-foreground">post-quantum cryptography</span> (AnonyMus —
              ML-KEM-768 with double-ratcheted E2EE).
            </p>

            {/* Pull quote */}
            <div className="relative pl-6 border-l-2 border-neon/40 my-8">
              <Quote className="absolute -left-3 -top-2 h-5 w-5 text-neon bg-background p-0.5" />
              <p className="font-display italic text-lg text-platinum leading-relaxed">
                {profile.philosophy}
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              <FactRow icon={MapPin} label="Location" value={profile.location} />
              <FactRow icon={Mail} label="Email" value={profile.email} />
              <FactRow icon={Phone} label="Phone" value={profile.phone} />
              <FactRow icon={GraduationCap} label="Education" value="IIT Bombay EE '25" />
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <Card className="h-full bg-card/50 border-border/50 hover:border-neon/40 transition-all group">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-1 w-6 bg-neon/60 group-hover:w-10 transition-all" />
                        <Award className="h-3 w-3 text-neon" />
                      </div>
                      <div className="font-display text-3xl sm:text-4xl font-bold text-neon text-glow-neon">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm font-medium text-foreground">
                        {stat.label}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground leading-snug">
                        {stat.context}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-md bg-card/30 border border-border/30">
      <Icon className="h-4 w-4 text-neon mt-0.5 shrink-0" />
      <div className="min-w-0">
        <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-foreground font-medium truncate">{value}</div>
      </div>
    </div>
  );
}
