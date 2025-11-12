import { useUser } from "@clerk/clerk-react";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h1 className="text-4xl font-bold text-green-500">
        Welcome to Your Dashboard
      </h1>
      <p className="text-lg opacity-80">
        Hello, {user?.firstName || "User"} 👋
      </p>
      <p className="opacity-70">Track your expenses and grow your savings.</p>
    </div>
  );
}
