'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BadgeCheck, Trophy } from 'lucide-react';
import { education, certifications, achievements } from '@/lib/portfolio-data';
import { Card, CardContent } from '@/components/ui/card';

export function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 border-t border-border/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs text-neon tracking-widest mb-3">05 / EDUCATION</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Foundations &amp; credentials.
          </h2>
          <div className="mt-4 h-px w-24 bg-gradient-to-r from-neon to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-lg font-semibold text-platinum flex items-center gap-2 mb-4">
              <GraduationCap className="h-5 w-5 text-neon" />
              Education
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={`${edu.degree}-${edu.institution}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="bg-card/40 border-border/50 hover:border-neon/40 transition-all">
                  <CardContent className="p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <span className="font-mono text-xs text-neon">{edu.period}</span>
                    </div>
                    <p className="text-sm text-platinum font-medium mb-2">{edu.institution}</p>
                    {edu.score && (
                      <p className="text-sm text-neon font-mono">Score: {edu.score}</p>
                    )}
                    {edu.details && (
                      <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                        {edu.details}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Certifications */}
            <h3 className="font-display text-lg font-semibold text-platinum flex items-center gap-2 mb-4 mt-8">
              <BadgeCheck className="h-5 w-5 text-neon" />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="h-full bg-card/40 border-border/50 hover:border-neon/40 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                        <span className="font-mono text-xs text-neon">{cert.year}</span>
                      </div>
                      <p className="text-sm text-platinum font-medium mb-3">{cert.issuer}</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.topics.slice(0, 6).map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-muted-foreground bg-background/50 border border-border/30"
                          >
                            {topic}
                          </span>
                        ))}
                        {cert.topics.length > 6 && (
                          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-muted-foreground">
                            +{cert.topics.length - 6} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="font-display text-lg font-semibold text-platinum flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-neon" />
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="bg-card/40 border-border/50 hover:border-neon/40 transition-all group">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Award className="h-4 w-4 text-neon mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-foreground leading-snug">
                            {ach.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 leading-snug">
                            {ach.context}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
