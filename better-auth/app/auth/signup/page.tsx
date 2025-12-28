"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
        callbackURL: "/dashboard",
      },
      {
        onRequest: (ctx) => {
          console.log("Making request: ", ctx.body);
        },
        onSuccess: () => {
          console.log("SUCCESS");
          redirect("/dashboard");
        },
        onError: (ctx) => {
          console.log("ERROR: ", ctx.error);
        },
      }
    );
    console.log("DATA: ", data);
  };

  const handleGoogleSignUp = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log("data", data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col gap-4 bg-zinc-800 p-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1>SignUp</h1>
        <input
          className="border border-gray-600 p-2"
          type="text"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          placeholder="Name"
        />
        <input
          className="border border-gray-600 p-2"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <input
          className="border border-gray-600 p-2"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your password"
        />
        <button
          type="submit"
          className="bg-black text-white p-2 cursor-pointer"
        >
          Signup
        </button>
        <h1>OR</h1>
        <button onClick={handleGoogleSignUp}>SignUp with Google</button>
      </form>
    </div>
  );
}
