
import React from 'react';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatCard = ({ title, value, icon, percentage, isIncrease, className }) => {
  return (
    <div className={cn("bg-white p-6 rounded-2xl shadow-sm", className)}>
      <div className="flex items-start justify-between mb-6">
        <div className={`p-3 rounded-lg ${getIconBgColor(isIncrease)}`}>
          {icon}
        </div>
        <div className="flex items-center gap-1">
          {isIncrease ? (
            <TrendingUp className="h-4 w-4 text-success" />
          ) : (
            <TrendingDown className="h-4 w-4 text-danger" />
          )}
          <span className={`text-sm font-medium ${isIncrease ? 'text-success' : 'text-danger'}`}>
            {percentage}%
          </span>
        </div>
      </div>
      <h3 className="text-sm font-medium text-text-muted mb-1">{title}</h3>
      <p className="text-2xl font-semibold text-text">{value}</p>
    </div>
  );
};

function getIconBgColor(isIncrease) {
  return isIncrease ? 'bg-success-light text-success' : 'bg-danger-light text-danger';
}

export default StatCard;
