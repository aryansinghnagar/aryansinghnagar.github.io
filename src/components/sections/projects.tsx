'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Folder, Compass } from 'lucide-react';
import { projects } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

const categoryColors: Record<string, string> = {
  'Generative AI & Agents': 'text-neon border-neon/40 bg-neon/5',
  'Systems & Security': 'text-platinum border-platinum/40 bg-platinum/5',
  'ML / CV': 'text-neon border-neon/40 bg-neon/5',
  'Data Science': 'text-platinum border-platinum/40 bg-platinum/5',
};

const categories = [
  'All',
  'Generative AI & Agents',
  'Systems & Security',
  'ML / CV',
  'Data Science',
] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = projects.filter((p) => {
    if (!p.featured) return false;
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">04 / PROJECTS</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Featured work &amp; initiatives.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
          <p className="mt-6 text-muted-foreground max-w-2xl">
            A portfolio of systems spanning agentic operating systems, syntax-aware devtools,
            low-latency edge computer vision, applied post-quantum cryptography, and custom OS appliances.
            Each project pairs architectural curiosity with defensive design and an active engineering roadmap.
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === 'All'
                ? projects.filter((p) => p.featured).length
                : projects.filter((p) => p.featured && p.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-neon/15 text-neon border border-neon/50 shadow-sm shadow-neon/20'
                    : 'bg-card/40 text-muted-foreground border border-border/50 hover:border-neon/30 hover:text-foreground'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isSelected
                      ? 'bg-neon/20 text-neon'
                      : 'bg-background/80 text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="group h-full bg-card/40 border-border/50 hover:border-neon/50 hover:bg-card/60 transition-all overflow-hidden relative flex flex-col">
                  {/* Top accent line */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-neon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <CardContent className="p-6 flex flex-col h-full flex-1">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <Folder className="h-5 w-5 text-neon shrink-0" />
                        <div>
                          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-neon transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs font-mono text-muted-foreground">
                              {project.year}
                            </span>
                            <span className="text-xs text-muted-foreground">·</span>
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                                categoryColors[project.category] ||
                                'text-platinum border-platinum/40 bg-platinum/5'
                              }`}
                            >
                              {project.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      {Boolean(project.links[0]?.href?.startsWith('http')) && (
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-neon group-hover:rotate-12 transition-all shrink-0" />
                      )}
                    </div>

                    {/* Hook */}
                    <p className="text-sm text-platinum/90 font-medium leading-relaxed mb-3">
                      {project.hook}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
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
                      {project.highlights.slice(0, 4).map((highlight, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-xs text-muted-foreground leading-relaxed"
                        >
                          <span className="mt-1 h-1 w-1 rounded-full bg-neon/60 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Active Exploration & Roadmap section */}
                    {project.roadmap && (
                      <div className="mt-auto mb-4 p-3.5 rounded-lg bg-background/60 border border-neon/20 relative overflow-hidden">
                        <div className="flex items-center gap-2 mb-2">
                          <Compass className="h-3.5 w-3.5 text-neon" />
                          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neon">
                            Engineering Horizon &amp; Roadmap
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed mb-1.5">
                          <span className="text-platinum/90 font-medium">Domain Challenge: </span>
                          <span>{project.roadmap.challenge}</span>
                        </div>
                        <div className="text-xs text-muted-foreground leading-relaxed">
                          <span className="text-neon/90 font-medium">Planned Approach: </span>
                          <span>{project.roadmap.plan}</span>
                        </div>
                      </div>
                    )}

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
                      <div className="flex flex-wrap gap-2 pt-1">
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
          </AnimatePresence>
        </motion.div>

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
            View all repositories &amp; experiments on GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
