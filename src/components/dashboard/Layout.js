
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { SidebarProvider } from '@/components/ui/sidebar';

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
