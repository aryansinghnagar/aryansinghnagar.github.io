'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { stats } from '@/lib/portfolio-data';
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
            Background &amp; Engineering Focus
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-foreground/90 leading-relaxed">
              I am <span className="text-foreground font-semibold">Aryan Singh Nagar</span>, an{' '}
              <span className="text-neon font-medium">AI-Native Developer</span> and graduate of{' '}
              <span className="text-foreground font-medium">IIT Bombay (Class of 2025)</span>. I focus on core competencies across AI-native development, machine learning, deep learning, and data science—building intelligent systems, agentic workflows, and high-throughput retrieval pipelines.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              Grounded in core fundamentals—data structures &amp; algorithms (DSA), mathematical modeling, and statistical rigor—I write clean, production-grade Python and SQL, backed by disciplined Git version control. I build scalable, high-performance solutions with deep attention to algorithmic efficiency and data integrity.
            </p>
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
