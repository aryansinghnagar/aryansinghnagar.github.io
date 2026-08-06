'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile, socials } from '@/lib/portfolio-data';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  file: Download,
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-mesh" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-platinum/5 rounded-full blur-[100px]" />

      {/* Vertical accent line */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-neon/60 to-transparent hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-neon/30 bg-neon/5 text-xs font-mono text-neon"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon" />
              </span>
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]"
            >
              <span className="block">Aryan Singh</span>
              <span className="block text-glow-neon text-neon">Nagar.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-mono text-sm sm:text-base text-platinum/70 tracking-wider"
            >
              <span className="text-muted-foreground">{"//"}</span> also known as{' '}
              <span className="text-platinum font-medium">{profile.handle}</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl lg:mx-0 mx-auto"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-3 text-base text-platinum/80 font-medium"
            >
              {profile.subTagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-neon text-background hover:bg-neon/90 font-medium glow-neon-soft"
              >
                <a href="#projects">
                  <Sparkles className="h-4 w-4 mr-2" />
                  View My Work
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-neon/30 hover:border-neon hover:bg-neon/5"
              >
                <a href={profile.resumeUrl} download>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social rail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex items-center gap-3 justify-center lg:justify-start"
            >
              {socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border/50 text-muted-foreground hover:text-neon hover:border-neon/50 hover:bg-neon/5 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Headshot card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-neon/30 via-transparent to-platinum/20 rounded-2xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-neon/30 bg-card">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon to-transparent z-10" />

                <img
                  src={profile.headshot}
                  alt="Aryan Singh Nagar — headshot"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Corner marks */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-neon/60" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-neon/60" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-neon/60" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-neon/60" />
              </div>

              {/* Floating credential chips */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="absolute -left-6 top-1/4 px-3 py-1.5 rounded-md bg-card border border-neon/30 text-xs font-mono text-neon shadow-lg"
              >
                IIT Bombay '25
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -right-4 bottom-1/4 px-3 py-1.5 rounded-md bg-card border border-platinum/30 text-xs font-mono text-platinum shadow-lg"
              >
                JEE Adv AIR 413
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-muted-foreground tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-neon" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
