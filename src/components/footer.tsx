'use client';

import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { profile, socials, navItems } from '@/lib/portfolio-data';

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  file: Download,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background/60 backdrop-blur-sm">
      {/* Top accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neon/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="font-display text-xl font-bold mb-2">
              Aryan Singh <span className="text-neon">Nagar</span>
            </div>
            <div className="font-mono text-xs text-muted-foreground mb-3">
              B.Tech, Electrical Engineering · IIT Bombay &apos;25
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-xs text-neon uppercase tracking-widest mb-4">
              Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-neon transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <div className="font-mono text-xs text-neon uppercase tracking-widest mb-4">
              Connect
            </div>
            <div className="flex gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 text-muted-foreground hover:text-neon hover:border-neon/50 hover:bg-neon/5 transition-all"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <a
              href={profile.resumeUrl}
              download
              className="mt-4 inline-flex items-center gap-2 text-sm text-platinum hover:text-neon transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground font-mono">
            © {year} Aryan Singh Nagar. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Indian Institute of Technology, Bombay · Electrical Engineering (2019–2025)
          </p>
        </div>
      </div>
    </footer>
  );
}
