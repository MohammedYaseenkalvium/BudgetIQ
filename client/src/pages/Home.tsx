import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center h-full text-center space-y-6">
      <h1 className="text-4xl font-bold mb-4 text-green-500">
        Welcome to BudgetIQ
      </h1>
      <p className="text-lg opacity-80 max-w-md">
        Track your expenses, analyze your spending habits, and take control of your financial future.
      </p>
      <button
        onClick={() => navigate("/sign-in")}
        className="px-6 py-2 mt-4 rounded-lg bg-green-500 text-white font-medium hover:bg-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] transition duration-300"
      >
        Sign In
      </button>
    </div>
  );
};

export default Home;
