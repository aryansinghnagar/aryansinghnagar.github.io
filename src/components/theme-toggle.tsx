'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  // useTheme returns undefined theme on the server; we defer rendering until mounted
  // to avoid hydration mismatch. The mounted flag is set in a layout effect.
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // Defer to next tick to avoid React 19 strict mode warning about
    // synchronous setState in effect. This is the canonical pattern.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9" aria-hidden="true">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="h-9 w-9 rounded-md border border-border/50 hover:border-neon/50 hover:bg-neon/5 transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-neon" />
      ) : (
        <Moon className="h-4 w-4 text-primary" />
      )}
    </Button>
  );
}
