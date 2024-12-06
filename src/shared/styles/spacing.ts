const base = 4;
export const spacing = {
  's-1': base,
  's-2': base * 2,
  's-3': base * 3,
  's-4': base * 4,
  's-5': base * 5,
  's-6': base * 6,
  's-7': base * 8,
  's-8': base * 10,
  's-9': base * 12,
  's-10': base * 14,
  's-11': base * 16,
  's-12': base * 18,
  's-13': base * 20,
  's-14': base * 24,
  's-15': base * 32,
  's-16': base * 34,
  's-17': base * 40,
  's-18': base * 48,
  's-19': base * 56,
  's-20': base * 64,
  's-21': base * 80,
  's-22': base * 90,
  's-23': base * 128,
} as const;

export type spacingTypes = keyof typeof spacing;
