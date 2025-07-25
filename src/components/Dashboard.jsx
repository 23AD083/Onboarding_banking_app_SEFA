import React, { useState } from "react";
import { FiSend, FiFileText, FiPlusCircle, FiCreditCard, FiBell, FiSun, FiMoon, FiUser, FiSettings, FiHelpCircle, FiHome } from "react-icons/fi";

const user = {
  name: "Alex",
  profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
};

const accounts = [
  { type: "Savings", balance: 82345.67, icon: <FiCreditCard />, color: "from-green-400 to-teal-400" },
  { type: "Current", balance: 15432.10, icon: <FiCreditCard />, color: "from-blue-400 to-indigo-400" },
  { type: "Credit", balance: 5000.00, icon: <FiCreditCard />, color: "from-pink-400 to-purple-400" },
];

const transactions = [
  { id: 1, label: "Salary", amount: 5000, type: "in", icon: <FiPlusCircle />, date: "2024-06-01" },
  { id: 2, label: "Shopping", amount: -1200, type: "out", icon: <FiFileText />, date: "2024-06-03" },
  { id: 3, label: "Groceries", amount: -800, type: "out", icon: <FiFileText />, date: "2024-06-04" },
  { id: 4, label: "Transfer", amount: 2000, type: "in", icon: <FiSend />, date: "2024-06-05" },
];

const notifications = [
  { id: 1, message: "Low balance alert on Credit Account", type: "alert" },
  { id: 2, message: "New offer: 5% cashback on shopping!", type: "offer" },
  { id: 3, message: "Security update: Change your password regularly.", type: "security" },
];

const navItems = [
  { label: "Dashboard", icon: <FiHome /> },
  { label: "Transactions", icon: <FiFileText /> },
  { label: "Profile", icon: <FiUser /> },
  { label: "Settings", icon: <FiSettings /> },
  { label: "Help", icon: <FiHelpCircle /> },
];

function AreaChart() {
  // Placeholder SVG area chart
  return (
    <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
      <defs>
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <path d="M0 50 Q 40 10 80 30 T 160 20 T 200 50 V60 H0Z" fill="url(#areaGradient)" />
      <path d="M0 50 Q 40 10 80 30 T 160 20 T 200 50" stroke="#6366f1" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Dashboard() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex" : "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900 flex"}>
      {/* Sidebar */}
      <aside className={"hidden md:flex flex-col w-20 py-8 px-2 bg-white/80 dark:bg-gray-900/80 shadow-2xl rounded-r-3xl items-center gap-8"}>
        <img src={user.profilePhoto} alt="profile" className="w-12 h-12 rounded-full shadow-lg mb-4 border-4 border-indigo-200" />
        {navItems.map((item, i) => (
          <button key={item.label} className="flex flex-col items-center text-xl text-indigo-500 hover:text-indigo-700 focus:outline-none mb-2">
            {item.icon}
            <span className="text-xs mt-1 font-medium hidden xl:block">{item.label}</span>
          </button>
        ))}
        <button className="mt-auto" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
          {dark ? <FiSun className="text-yellow-400 text-2xl" /> : <FiMoon className="text-indigo-500 text-2xl" />}
        </button>
      </aside>
      {/* Main Content */}
      <main className="flex-1 flex flex-col md:flex-row gap-6 p-4 md:p-10 w-full">
        {/* Left Column */}
        <section className="flex-1 flex flex-col gap-6">
          {/* Welcome Card */}
          <div className={dark ? "bg-gray-800 rounded-3xl shadow-xl p-6 flex items-center gap-4" : "bg-white rounded-3xl shadow-xl p-6 flex items-center gap-4"}>
            <img src={user.profilePhoto} alt="profile" className="w-16 h-16 rounded-full shadow border-4 border-indigo-200" />
            <div>
              <h2 className="text-2xl font-bold">Welcome, {user.name} 👋</h2>
              <p className="text-gray-500 dark:text-gray-300">Ready to manage your finances?</p>
            </div>
          </div>
          {/* Account Balances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {accounts.map(acc => (
              <div key={acc.type} className={`bg-gradient-to-br ${acc.color} rounded-2xl shadow-lg p-4 flex flex-col items-center neumorph-card`}>
                <div className="text-3xl mb-1">{acc.icon}</div>
                <div className="font-semibold text-lg text-white drop-shadow">{acc.type}</div>
                <div className="text-white text-xl font-bold mt-1">₹{acc.balance.toLocaleString()}</div>
              </div>
            ))}
          </div>
          {/* Quick Actions */}
          <div className={dark ? "bg-gray-800 rounded-3xl shadow-xl p-4 flex gap-4 justify-between" : "bg-white rounded-3xl shadow-xl p-4 flex gap-4 justify-between"}>
            <button className="flex-1 flex flex-col items-center py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-400 text-white shadow hover:scale-105 transition">
              <FiSend className="text-2xl mb-1" />
              <span className="text-xs font-semibold">Send Money</span>
            </button>
            <button className="flex-1 flex flex-col items-center py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-400 text-white shadow hover:scale-105 transition">
              <FiFileText className="text-2xl mb-1" />
              <span className="text-xs font-semibold">Pay Bills</span>
            </button>
            <button className="flex-1 flex flex-col items-center py-2 rounded-xl bg-gradient-to-r from-green-400 to-teal-400 text-white shadow hover:scale-105 transition">
              <FiPlusCircle className="text-2xl mb-1" />
              <span className="text-xs font-semibold">Add Funds</span>
            </button>
            <button className="flex-1 flex flex-col items-center py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow hover:scale-105 transition">
              <FiFileText className="text-2xl mb-1" />
              <span className="text-xs font-semibold">View Statements</span>
            </button>
          </div>
          {/* Analytics Card */}
          <div className={dark ? "bg-gray-800 rounded-3xl shadow-xl p-6" : "bg-white rounded-3xl shadow-xl p-6"}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-lg">Monthly Expense Trends</span>
              <span className="text-xs text-gray-400">June 2024</span>
            </div>
            <AreaChart />
          </div>
        </section>
        {/* Right Column */}
        <aside className="w-full md:w-80 flex flex-col gap-6">
          {/* Recent Transactions */}
          <div className={dark ? "bg-gray-800 rounded-3xl shadow-xl p-6" : "bg-white rounded-3xl shadow-xl p-6"}>
            <div className="font-semibold text-lg mb-2">Recent Transactions</div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map(tx => (
                <li key={tx.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <span className={tx.type === "in" ? "text-green-500" : "text-red-400"}>{tx.icon}</span>
                    <span>{tx.label}</span>
                  </div>
                  <span className={tx.type === "in" ? "text-green-500 font-semibold" : "text-red-400 font-semibold"}>{tx.type === "in" ? "+" : "-"}₹{Math.abs(tx.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Notifications */}
          <div className={dark ? "bg-gray-800 rounded-3xl shadow-xl p-6" : "bg-white rounded-3xl shadow-xl p-6"}>
            <div className="font-semibold text-lg mb-2">Notifications</div>
            <ul className="space-y-2">
              {notifications.map(note => (
                <li key={note.id} className={note.type === "alert" ? "text-yellow-500" : note.type === "offer" ? "text-indigo-500" : "text-gray-500 dark:text-gray-300"}>{note.message}</li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <style>{`
        .neumorph-card {
          box-shadow: 8px 8px 24px #d1d9e6, -8px -8px 24px #ffffff;
        }
        .dark .neumorph-card {
          box-shadow: 8px 8px 24px #23272f, -8px -8px 24px #353b48;
        }
      `}</style>
    </div>
  );
} 