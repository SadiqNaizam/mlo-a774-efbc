import React from 'react';
import Header from '@/components/layout/Header';
import FooterNav from '@/components/layout/FooterNav';
import GoalCard, { type GoalIconType } from '@/components/SavingsGoals/GoalCard';

// Define the type for a single savings goal.
// This structure aligns with the props expected by the GoalCard component,
// with an added 'id' for list rendering.
interface SavingsGoal {
  id: number;
  title: string;
  icon: GoalIconType;
  targetAmount: number;
  currentAmount: number;
  completedDate?: string;
}

// Dummy data for the savings goals, reflecting the UI mockup.
// Using 'as const' would be an option here, but a typed array is also robust.
const savingsGoalsData: readonly SavingsGoal[] = [
  {
    id: 1,
    title: 'New Headphones',
    icon: 'Headphones',
    targetAmount: 150.00,
    currentAmount: 90.00,
  },
  {
    id: 2,
    title: 'Summer Trip Fund',
    icon: 'Sun',
    targetAmount: 200.00,
    currentAmount: 200.00,
    completedDate: '15th May 2024',
  },
  {
    id: 3,
    title: 'Birthday Gift for Friend',
    icon: 'Gift',
    targetAmount: 25.00,
    currentAmount: 2.50,
  },
];

/**
 * IndexPage serves as the main page for the savings goals feature.
 * It assembles the page using a header, a scrollable list of goal cards, and a fixed footer navigation.
 * The layout is designed for a mobile-first experience, constrained to a maximum width to mimic a phone screen.
 */
const IndexPage: React.FC = () => {
  return (
    // The main container for the page, creating a mobile-like centered view.
    // It has a fixed height of the screen and vertical flex layout.
    <div className="flex flex-col h-screen bg-background max-w-md mx-auto shadow-lg">
      <Header />
      <main className="flex-1 overflow-y-auto">
        {/* The inner div provides padding and spacing for the list of cards. */}
        {/* `pb-24` adds space at the bottom to prevent the fixed footer from obscuring the last card. */}
        <div className="p-6 space-y-4 pb-24">
          {savingsGoalsData.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </main>
      <FooterNav />
    </div>
  );
};

export default IndexPage;
