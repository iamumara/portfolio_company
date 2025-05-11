import { CircleUser } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <CircleUser className="h-8 w-8 text-primary-600" />
      <span className="text-xl font-bold gradient-text">Abu Bakar</span>
    </div>
  );
};