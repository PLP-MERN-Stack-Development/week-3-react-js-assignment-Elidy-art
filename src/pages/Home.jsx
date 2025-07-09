import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Card className="max-w-xl text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to TaskMaster!</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Manage your tasks efficiently, explore API data, and enjoy a modern, responsive UI built with React and Tailwind CSS.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Use the navigation bar to get started.
        </p>
      </Card>
    </div>
  );
} 