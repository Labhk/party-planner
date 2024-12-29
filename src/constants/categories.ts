export const EXPENSE_CATEGORIES = [
  'Venue',
  'Catering',
  'Decoration',
  'Entertainment',
  'Other'
] as const;

export type ExpenseCategory = typeof EXPENSE_CATEGORIES[number];