import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Header component for the application layout.
 * Displays the page title and a primary action button.
 */
const Header: React.FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-6">
      <h1 className="text-xl font-bold text-foreground sm:text-2xl">
        Your Savings Goals
      </h1>
      <Button className="bg-success text-success-foreground hover:bg-success/90">
        <Plus className="mr-2 h-4 w-4" />
        New Goal
      </Button>
    </header>
  );
};

export default Header;
