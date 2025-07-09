import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-gray-500 dark:text-gray-400 text-sm">&copy; {new Date().getFullYear()} TaskMaster. All rights reserved.</div>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="https://github.com/" className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</a>
        </div>
      </div>
    </footer>
  );
}
