
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const transactions = [
  {
    id: 1,
    name: 'Spotify Subscription',
    date: 'June 30, 2023',
    amount: '-$12.99',
    status: 'Completed',
    type: 'expense'
  },
  {
    id: 2,
    name: 'Salary Deposit',
    date: 'June 29, 2023',
    amount: '+$4,500.00',
    status: 'Completed',
    type: 'income'
  },
  {
    id: 3,
    name: 'Amazon Purchase',
    date: 'June 28, 2023',
    amount: '-$64.23',
    status: 'Completed',
    type: 'expense'
  },
  {
    id: 4,
    name: 'Client Payment',
    date: 'June 25, 2023',
    amount: '+$850.00',
    status: 'Pending',
    type: 'income'
  },
  {
    id: 5,
    name: 'Restaurant Bill',
    date: 'June 24, 2023',
    amount: '-$56.80',
    status: 'Completed',
    type: 'expense'
  }
];

const TransactionTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-lg font-semibold text-text">Recent Transactions</h2>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-light" />
            <Input 
              className="pl-10 w-full md:w-[220px] bg-white border-gray-200" 
              placeholder="Search transactions..." 
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.name}</TableCell>
                <TableCell className="text-text-light">{transaction.date}</TableCell>
                <TableCell className={`text-right font-medium ${
                  transaction.type === 'income' ? 'text-success' : 'text-text'
                }`}>
                  {transaction.amount}
                </TableCell>
                <TableCell>
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                    transaction.status === 'Completed' 
                      ? 'bg-success-light text-success' 
                      : 'bg-warning-light text-warning'
                  }`}>
                    {transaction.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
