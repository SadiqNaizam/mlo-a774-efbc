import React from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between px-6 bg-background border-b">
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
