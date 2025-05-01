
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', income: 4000 },
  { name: 'Feb', income: 3000 },
  { name: 'Mar', income: 5000 },
  { name: 'Apr', income: 4500 },
  { name: 'May', income: 6000 },
  { name: 'Jun', income: 5500 },
  { name: 'Jul', income: 7000 },
  { name: 'Aug', income: 6500 },
];

const IncomeChart = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-text">Income Statistics</h2>
        <p className="text-sm text-text-light">Monthly income progress report</p>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #EAECF0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value) => [`$${value}`, 'Income']}
            />
            <Bar dataKey="income" fill="#5932EA" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
