
import React from 'react';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { 
  Home, 
  ArrowRightLeft, 
  CreditCard, 
  PieChart, 
  Users, 
  Gift, 
  HelpCircle, 
  Settings, 
  LogOut 
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    icon: Home,
    active: true,
    url: '/'
  },
  {
    title: 'Transactions',
    icon: ArrowRightLeft,
    active: false,
    url: '/transactions'
  },
  {
    title: 'Cards',
    icon: CreditCard,
    active: false,
    url: '/cards'
  },
  {
    title: 'Analytics',
    icon: PieChart,
    active: false,
    url: '/analytics'
  },
  {
    title: 'Contacts',
    icon: Users,
    active: false,
    url: '/contacts'
  },
  {
    title: 'Rewards',
    icon: Gift,
    active: false,
    url: '/rewards'
  },
];

const Sidebar = () => {
  return (
    <SidebarComponent>
      <SidebarHeader className="py-6 px-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className="text-xl font-semibold text-text">BankDash</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm text-text-light mb-4 px-2">MENU</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`${item.active ? 'bg-primary !text-white' : ''}`}>
                    <a href={item.url} className="flex items-center gap-3 px-4 py-3 rounded-lg">
                      <item.icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-sm text-text-light mb-4 px-2">OTHER</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/help" className="flex items-center gap-3 px-4 py-3 rounded-lg">
                    <HelpCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Help Center</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg">
                    <Settings className="h-5 w-5" />
                    <span className="text-sm font-medium">Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 mt-auto border-t">
        <a href="/logout" className="flex items-center gap-3 px-4 py-3 rounded-lg text-danger hover:bg-danger-light transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-medium">Log Out</span>
        </a>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
