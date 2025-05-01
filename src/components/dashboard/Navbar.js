
import React from 'react';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  return (
    <div className="border-b bg-white py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
            <Input 
              className="pl-10 w-[280px] bg-white border-gray-200 focus:border-primary" 
              placeholder="Search..." 
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost"
            size="icon"
            className="relative"
          >
            <Bell className="h-5 w-5 text-text-muted" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-danger"></span>
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                alt="User profile" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text">John Doe</p>
              <p className="text-xs text-text-light">john@example.com</p>
            </div>
            <ChevronDown className="h-4 w-4 text-text-light hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
