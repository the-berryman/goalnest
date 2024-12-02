import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Menu, Search, Home, Wallet } from 'lucide-react';

const chartData = [
    { date: 'Nov 23', value: 30000 },
    { date: '24', value: 32000 },
    { date: '25', value: 31000 },
    { date: '26', value: 34000 },
    { date: '27', value: 36000 },
    { date: '28', value: 38000 },
    { date: '29', value: 42000 },
    { date: '30', value: 45678 },
];

const GoalNestApp = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');

    const DashboardPage = () => (
        <div className="p-4 space-y-4">
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-4">
                    <Menu className="w-6 h-6" />
                    <h1 className="text-xl font-semibold">GoalNest</h1>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>

            <div className="flex gap-2 mb-4">
                <button className="bg-black text-white px-4 py-2 rounded-full">Overview</button>
                <button className="px-4 py-2 rounded-full">Savings</button>
                <button className="px-4 py-2 rounded-full">Goals</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow">
                    <h3 className="text-sm text-gray-600">Total Balance</h3>
                    <p className="text-2xl font-bold">$45,678.90</p>
                    <p className="text-sm text-green-500">+20% month over month</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow">
                    <h3 className="text-sm text-gray-600">Active Goals</h3>
                    <p className="text-2xl font-bold">2,405</p>
                    <p className="text-sm text-green-500">+33% month over month</p>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow h-64">
                <h3 className="text-sm text-gray-600 mb-2">Growth Trajectory</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="text-sm text-gray-600 mb-2">Team Members</h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div>
                            <p className="font-medium">Elynn Lee</p>
                            <p className="text-sm text-gray-500">email@fakedomain.net</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200" />
                        <div>
                            <p className="font-medium">Oscar Dum</p>
                            <p className="text-sm text-gray-500">email@fakedomain.net</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const SavingsPage = () => (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Savings Goals</h2>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3>Home Down Payment</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">$45,000 / $60,000</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3>Emergency Fund</h3>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-600 h-2 rounded-full w-1/2"></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">$5,000 / $10,000</p>
                </div>
            </div>
        </div>
    );

    const SearchPage = () => (
        <div className="p-4">
            <div className="mb-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="w-full p-2 pl-10 border rounded-lg"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
            </div>
            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-medium">Recent Transactions</h3>
                    <div className="mt-4 space-y-3">
                        {[
                            { name: 'Grocery Store', amount: -120.50, date: 'Today' },
                            { name: 'Salary Deposit', amount: 3000.00, date: 'Yesterday' },
                            { name: 'Electric Bill', amount: -85.30, date: '2 days ago' }
                        ].map((transaction, i) => (
                            <div key={i} className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium">{transaction.name}</p>
                                    <p className="text-sm text-gray-500">{transaction.date}</p>
                                </div>
                                <p className={transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}>
                                    ${Math.abs(transaction.amount).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const WalletPage = () => (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">My Wallet</h2>
            <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-xl text-white">
                    <p className="text-sm opacity-80">Current Balance</p>
                    <p className="text-3xl font-bold mt-1">$45,678.90</p>
                    <p className="mt-4 text-sm opacity-80">**** **** **** 4589</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                    <h3 className="font-medium mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                        {['Send', 'Receive', 'Pay Bills'].map((action, i) => (
                            <button key={i} className="p-4 border rounded-lg">
                                <p className="text-sm">{action}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    const pages = {
        dashboard: <DashboardPage />,
        savings: <SavingsPage />,
        search: <SearchPage />,
        wallet: <WalletPage />
    };

    return (
        <div className="max-w-md mx-auto h-screen bg-gray-50 flex flex-col">
            <div className="flex-1 overflow-y-auto">
                {pages[currentPage]}
            </div>

            <div className="bg-white border-t p-4">
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => setCurrentPage('dashboard')}
                        className={`p-2 ${currentPage === 'dashboard' ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                        <Home className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setCurrentPage('search')}
                        className={`p-2 ${currentPage === 'search' ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                        <Search className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setCurrentPage('savings')}
                        className={`p-2 ${currentPage === 'savings' ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => setCurrentPage('wallet')}
                        className={`p-2 ${currentPage === 'wallet' ? 'text-blue-600' : 'text-gray-500'}`}
                    >
                        <Wallet className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GoalNestApp;