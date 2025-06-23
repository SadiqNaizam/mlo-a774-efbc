import React, { useState } from 'react';
import { LayoutGrid, PiggyBank, Send, User } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define a type for the icon names to ensure type safety and map to components.
type NavIconName = 'Dashboard' | 'Savings' | 'Payments' | 'Profile';

// Map icon names to their respective Lucide components for dynamic rendering.
const iconMap: Record<NavIconName, React.ElementType> = {
  Dashboard: LayoutGrid,
  Savings: PiggyBank,
  Payments: Send,
  Profile: User,
};

// Define the structure for a navigation item.
interface NavItem {
  label: NavIconName;
  href: string;
}

// Static data for the navigation items.
const navItems: readonly NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Savings', href: '/savings' },
  { label: 'Payments', href: '/payments' },
  { label: 'Profile', href: '/profile' },
];

/**
 * FooterNav component provides the main navigation for the mobile application.
 * It is fixed to the bottom of the viewport.
 */
const FooterNav: React.FC = () => {
  // In a real application, this state would be derived from a router's current location.
  const [activeItem, setActiveItem] = useState<NavIconName>('Savings');

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-16 w-full border-t bg-card">
      <nav className="grid h-full grid-cols-4">
        {navItems.map((item) => {
          const Icon = iconMap[item.label];
          const isActive = activeItem === item.label;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault(); // Prevent page reload for this demo
                setActiveItem(item.label);
              }}
              className={cn(
                'flex h-full flex-col items-center justify-center gap-1 transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary/80'
              )}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                className="h-6 w-6"
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className="text-xs font-medium">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </footer>
  );
};

export default FooterNav;
