"use client"
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  async function handleSignin() {
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Sign in
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Welcome back. Enter your details to continue.
            </p>
          </header>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input onChange={(e)=>{
                setemail(e.target.value)
              }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <input onChange={(e)=>{
                setpassword(e.target.value)
              }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              onClick={handleSignin}
              disabled={status === "loading"}
              type="button"
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white outline-none hover:bg-gray-800 focus:ring-2 focus:ring-gray-900/20 disabled:cursor-not-allowed disabled:bg-gray-400"
            >
              Sign in
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-700"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
