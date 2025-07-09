import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import ApiData from "./pages/ApiData";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Button from "./components/Button";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      variant="secondary"
      className="fixed bottom-6 right-6 z-50 shadow-lg"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/api" element={<ApiData />} />
          </Routes>
          <ThemeSwitcher />
        </Layout>
      </Router>
    </ThemeProvider>
  );
} 