import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6 space-y-6">
      <h1 className="text-4xl font-bold text-green-500">About BudgetIQ</h1>
      <p className="max-w-2xl text-lg opacity-80 leading-relaxed">
        BudgetIQ is a smart expense-tracking platform designed to help you
        manage your money efficiently. We combine simplicity with insightful
        analytics so you can plan, save, and grow your finances with confidence.
      </p>
      <p className="max-w-2xl text-md opacity-70">
        Whether you're a student managing your monthly budget or a professional
        aiming for long-term goals, BudgetIQ provides the tools and insights to
        make your financial journey smoother.
      </p>
    </div>
  );
};

export default About;
