'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Folder } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const categoryColors: Record<string, string> = {
  'Generative AI': 'text-neon border-neon/40 bg-neon/5',
  'ML / CV': 'text-platinum border-platinum/40 bg-platinum/5',
  Security: 'text-neon border-neon/40 bg-neon/5',
  'Data Science': 'text-platinum border-platinum/40 bg-platinum/5',
};

export function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">04 / PROJECTS</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured work.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            A curated set of projects spanning generative AI, computer vision, applied cryptography,
            and data science. Each one shipped — not just demoed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card className="group h-full bg-card/40 border-border/50 hover:border-neon/50 hover:bg-card/60 transition-all overflow-hidden relative">
                {/* Top accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <CardContent className="p-6 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <Folder className="h-5 w-5 text-neon shrink-0" />
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs font-mono text-muted-foreground mt-0.5">
                          {project.year} · {project.category}
                        </p>
                      </div>
                    </div>
                    {project.links[0]?.href.startsWith('http') && (
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-neon group-hover:rotate-12 transition-all shrink-0" />
                    )}
                  </div>

                  {/* Hook */}
                  <p className="text-sm text-platinum/90 font-medium leading-relaxed mb-3">
                    {project.hook}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 rounded-md bg-background/40 border border-border/30">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <div className="font-display text-base font-bold text-neon">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4">
                    {project.highlights.slice(0, 3).map((highlight, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-1 h-1 w-1 rounded-full bg-neon/60 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-border/30">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono text-platinum/70 bg-background/50 border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                            link.primary
                              ? 'bg-neon/10 text-neon border border-neon/40 hover:bg-neon/20'
                              : 'border border-border/50 text-muted-foreground hover:text-foreground hover:border-foreground/30'
                          }`}
                        >
                          {link.href.includes('github') ? (
                            <Github className="h-3 w-3" />
                          ) : (
                            <ExternalLink className="h-3 w-3" />
                          )}
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/aryansinghnagar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-neon/30 hover:border-neon hover:bg-neon/5 text-sm font-medium text-platinum hover:text-neon transition-all"
          >
            <Github className="h-4 w-4" />
            View all repositories on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
