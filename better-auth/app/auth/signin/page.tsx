"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const {
  //     data: session,
  //     isPending, //loading state
  //     error, //error object
  //     refetch, //refetch the session
  // } = authClient.useSession();

  // useEffect(() => {
  //     if (session) {
  //         redirect('/dashboard');
  //     }
  // }, [session]);

  async function handleSubmit(e: any) {
    // handle submit logic
    e.preventDefault();

    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
        rememberMe: true,
      },
      {
        //callbacks
      }
    );
    console.log("data", data);
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="flex flex-col gap-4 bg-zinc-800 p-4 mx-auto"
        onSubmit={handleSubmit}
      >
        <h1>SignIn</h1>
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
          SignIn
        </button>
      </form>
    </div>
  );
};

export default SigninPage;
