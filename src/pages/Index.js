
import React from 'react';
import Layout from '../components/dashboard/Layout';
import StatCard from '../components/dashboard/StatCard';
import TransactionTable from '../components/dashboard/TransactionTable';
import CardComponent from '../components/dashboard/CardComponent';
import IncomeChart from '../components/dashboard/IncomeChart';
import { Wallet, ArrowRightLeft, PieChart, CreditCard } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text">Dashboard</h1>
        <p className="text-text-light">Welcome back, John!</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard 
          title="Total Balance" 
          value="$12,567.00" 
          icon={<Wallet className="h-5 w-5" />}
          percentage="12.7"
          isIncrease={true}
        />
        <StatCard 
          title="Total Spending" 
          value="$4,582.00" 
          icon={<ArrowRightLeft className="h-5 w-5" />}
          percentage="4.2"
          isIncrease={false}
        />
        <StatCard 
          title="Total Saved" 
          value="$7,985.00" 
          icon={<PieChart className="h-5 w-5" />}
          percentage="15.3"
          isIncrease={true}
        />
        <StatCard 
          title="Total Cards" 
          value="4 Cards" 
          icon={<CreditCard className="h-5 w-5" />}
          percentage="8.5"
          isIncrease={true}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <IncomeChart />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-text mb-4">Active Card</h2>
          <CardComponent
            cardNumber="**** **** **** 4123"
            cardHolder="John Doe"
            expiryDate="09/25"
            type="visa"
            className="bg-gradient-to-br from-primary to-purple-700 text-white"
          />
        </div>
      </div>

      <TransactionTable />
    </Layout>
  );
};

export default Index;
