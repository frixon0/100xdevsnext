"use client";

import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup() {
    const res = await axios.post("/api_user/signup", {
        name,
        email,
        password,
    });

    console.log(res.data);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 ring-1 ring-gray-200">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              Sign up
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Create your account. Enter your details to get started.
            </p>
          </header>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
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
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="********"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <button
              onClick={handleSignup}
              type="button"
              className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white outline-none hover:bg-gray-800 focus:ring-2 focus:ring-gray-900/20"
            >
              Sign up
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-700"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
