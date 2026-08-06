'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, TrendingUp } from 'lucide-react';
import { experiences } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">03 / EXPERIENCE</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Where I&apos;ve shipped.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-neon/60 via-neon/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Timeline node */}
                <div className="absolute left-2 sm:left-4 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-neon bg-background">
                  <div className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                </div>

                <Card className="bg-card/40 border-border/50 hover:border-neon/40 transition-all">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <span className="font-mono text-xs text-neon">{exp.period}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1.5 text-platinum font-medium">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-neon shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono text-platinum/70 bg-background/50 border border-border/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-card/60 to-card/20 border-neon/30">
            <CardContent className="p-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-neon" />
                <span className="text-sm font-medium text-foreground">
                  Headline impact:
                </span>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                <ImpactStat value="35+ FPS" label="Multimodal Vision (<40ms)" />
                <ImpactStat value="60%" label="LLM Token Cost Cut" />
                <ImpactStat value="1,000+ QPS" label="Microservice Throughput" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function ImpactStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-right">
      <div className="font-display text-xl font-bold text-neon">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
