import React from "react";
import { SignUp } from "@clerk/clerk-react";
import { useTheme } from "../themeContext";

const SignUpPage: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <SignUp
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "https://clerk.dev/logo.svg",
          },
          variables: {
            colorBackground: isDarkMode ? "#0f172a" : "#f9fafb",
            colorText: isDarkMode ? "#f1f5f9" : "#0f172a",
            colorPrimary: "#6366f1",
          },
          elements: {
            card: "shadow-xl rounded-2xl border border-gray-700",
          },
        }}
      />
    </div>
  );
};

export default SignUpPage;
