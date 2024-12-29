import React from 'react';
import { formatCurrency } from '../../utils/expense';

interface ExpenseSummaryProps {
  categoryTotals: Record<string, number>;
  total: number;
}

const ExpenseSummary: React.FC<ExpenseSummaryProps> = ({ categoryTotals, total }) => {
  return (
    <div className="mt-6 pt-6 border-t">
      <div className="space-y-2">
        {Object.entries(categoryTotals).map(([category, amount]) => (
          <div key={category} className="flex justify-between text-sm">
            <span className="text-gray-600">{category}</span>
            <span className="font-medium">{formatCurrency(amount)}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t flex justify-between">
        <span className="font-semibold">Total Budget</span>
        <span className="font-bold text-lg text-purple-600">{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

export default ExpenseSummary;