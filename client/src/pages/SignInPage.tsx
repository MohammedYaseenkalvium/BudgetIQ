import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <SignIn
        appearance={{
          elements: {
            card: "shadow-xl rounded-2xl",
          },
        }}
      />
    </div>
  );
}
