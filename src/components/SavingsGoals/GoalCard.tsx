import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Headphones, Sun, Gift, Plus, Pencil, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type GoalIconType = 'Headphones' | 'Sun' | 'Gift';

export interface GoalCardProps {
  goal: {
    title: string;
    icon: GoalIconType;
    targetAmount: number;
    currentAmount: number;
    completedDate?: string;
  };
  className?: string;
}

const iconMap: { [key in GoalIconType]: React.ElementType } = {
  Headphones: Headphones,
  Sun: Sun,
  Gift: Gift,
};

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

const GoalCard: React.FC<GoalCardProps> = ({ goal, className }) => {
  const { title, icon, targetAmount, currentAmount, completedDate } = goal;

  const progress = targetAmount > 0 ? Math.min(Math.round((currentAmount / targetAmount) * 100), 100) : 0;
  const isCompleted = progress >= 100;

  const IconComponent = iconMap[icon];

  // Specific coloring to match the UI screenshot's variations
  const isHeadphones = title.toLowerCase().includes("headphones");
  const isTripFund = title.toLowerCase().includes("trip");

  const titleColor = isHeadphones && !isCompleted ? "text-primary" : "text-foreground";
  const iconContainerColor = 
      isTripFund ? "bg-green-100 text-green-600" :
      isHeadphones ? "bg-blue-100 text-blue-600" :
      "bg-blue-100 text-blue-600";

  return (
    <Card className={cn("w-full rounded-2xl shadow-sm border bg-card", className)}>
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className={cn("font-bold text-base", titleColor)}>
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">
              Target: {formatCurrency(targetAmount)}
            </p>
          </div>
          <div className={cn("p-2.5 rounded-full", iconContainerColor)}>
            {IconComponent && <IconComponent className="h-6 w-6" />}
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative pt-2">
            <Progress value={progress} className="h-2.5 [&>div]:bg-success" />
            {!isCompleted && (
               <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-card font-bold text-success text-[10px] px-1.5 py-0.5 rounded-full shadow-md border border-gray-200"
                style={{ left: `${Math.max(6, Math.min(progress, 94))}%` }}
               >
                   {progress}%
               </div>
            )}
            {isCompleted && (
              <div className="absolute inset-0 top-2 flex items-center justify-center">
                <span className="text-xs font-bold text-white">100%</span>
              </div>
            )}
          </div>

          {isCompleted ? (
            <div className="text-sm pt-1 flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-success" />
              <div>
                <p className="font-semibold text-success">Goal Achieved! {formatCurrency(targetAmount)} / {formatCurrency(targetAmount)}</p>
                {completedDate && <p className="text-xs text-muted-foreground">Well done! You reached this goal on {completedDate}.</p>}
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground pt-1">
              Saved: {formatCurrency(currentAmount)} / {formatCurrency(targetAmount)}
            </p>
          )}
        </div>

        {!isCompleted && (
          <div className="flex items-center space-x-3 pt-2">
            <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl">
              <Plus className="mr-2 h-4 w-4" /> Add Funds
            </Button>
            <Button variant="outline" className="flex-1 border-border text-foreground hover:bg-secondary rounded-xl">
              <Pencil className="mr-2 h-4 w-4" /> Edit Goal
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GoalCard;
