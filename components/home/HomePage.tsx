"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [router, status]);

  if (status === "loading") {
    return <main className="p-8 text-sm text-gray-600">Loading...</main>;
  }

  if (!session?.user) {
    return null;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 ring-1 ring-gray-200">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome, {session.user.name}
        </h1>
        <p className="mt-2 text-sm text-gray-600">{session.user.email}</p>
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          type="button"
          className="mt-6 w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white outline-none hover:bg-gray-800 focus:ring-2 focus:ring-gray-900/20"
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
