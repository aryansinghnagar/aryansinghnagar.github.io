'use client';

import { Github, Linkedin, Mail, Download, Heart } from 'lucide-react';
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
              {"// "}also known as <span className="text-platinum">SilverFox</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {profile.tagline}
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-xs text-neon uppercase tracking-widest mb-4">
              Navigate
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
            © {year} Aryan Singh Nagar. Built with Next.js, Tailwind &amp; Framer Motion.
          </p>
          <p className="text-xs text-muted-foreground font-mono flex items-center gap-1.5">
            Designed in dark neon blue &amp; platinum
            <Heart className="h-3 w-3 text-neon fill-neon" />
          </p>
        </div>
      </div>
    </footer>
  );
}
