import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: sessionData } = useSession();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={handleSignIn}
      >
        Sign in
      </button>
    </main>
  );
}
