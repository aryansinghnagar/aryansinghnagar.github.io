'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

const categoryIcons: Record<string, string> = {
  'Languages & Tools': '{ }',
  'ML & AI': '◎',
  'Data Science': '∑',
  Foundations: '◆',
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">02 / SKILLS</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Stack &amp; toolbox.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full bg-card/40 border-border/50 hover:border-neon/40 transition-all overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-mono text-2xl text-neon opacity-70 group-hover:opacity-100 transition-opacity">
                      {categoryIcons[skillGroup.category] || '◆'}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {skillGroup.category}
                    </h3>
                    <div className="flex-1 h-px bg-border/40" />
                    <span className="font-mono text-xs text-muted-foreground">
                      {String(skillGroup.items.length).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono border border-border/50 bg-background/50 text-platinum/90 hover:border-neon/50 hover:text-neon hover:bg-neon/5 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
