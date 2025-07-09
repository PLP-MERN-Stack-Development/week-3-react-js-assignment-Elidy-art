import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow mb-4">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">TaskMaster</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-200 hover:underline">Home</Link>
          <Link to="/tasks" className="text-gray-700 dark:text-gray-200 hover:underline">Tasks</Link>
          <Link to="/api" className="text-gray-700 dark:text-gray-200 hover:underline">API Data</Link>
        </div>
      </div>
    </nav>
  );
}
