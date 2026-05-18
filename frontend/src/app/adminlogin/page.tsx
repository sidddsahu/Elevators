// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import api from "../lib/api";

// export default function AdminLoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await api.post("/auth/login", {
//         email,
//         password,
//       });

//       const { user, token } = res.data.data;

//       if (user.role !== "admin") {
//         setError("Access denied. Admin only.");
//         setLoading(false);
//         return;
//       }

//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));

//       router.push("/admin");
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
//       <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-white text-center mb-6">
//           Admin Panel Login
//         </h1>

//         {error && (
//           <p className="bg-red-500/10 text-red-400 text-sm p-3 rounded mb-4">
//             {error}
//           </p>
//         )}

//         <form onSubmit={handleLogin} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Admin Email"
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold"
//           >
//             {loading ? "Signing in..." : "Login as Admin"}
//           </button>
//         </form>

//         <p className="text-center text-gray-400 text-sm mt-6">
//           Secure Admin Access Only 🔐
//         </p>
//       </div>
//     </div>
//   );
// }

// app/adminlogin/page.tsx

"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

import api from "../lib/api";

/* =========================
   TYPES
========================= */

interface User {
  _id?: string;
  username?: string;
  email: string;
  role: string;
}

interface LoginResponse {
  data: {
    user: User;
    token: string;
  };
}

interface ApiError {
  message: string;
}

/* =========================
   COMPONENT
========================= */

export default function AdminLoginPage() {
  const router = useRouter();

  /* =========================
     STATES
  ========================= */

  const [email, setEmail] =
    useState<string>("");

  const [password, setPassword] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  const [error, setError] =
    useState<string>("");

  /* =========================
     HANDLE LOGIN
  ========================= */

  const handleLogin = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const res =
        await api.post<LoginResponse>(
          "/auth/login",
          {
            email,
            password
          }
        );

      const { user, token } =
        res.data.data;

      /* ---------- ADMIN CHECK ---------- */

      if (user.role !== "admin") {
        setError(
          "Access denied. Admin only."
        );

        setLoading(false);

        return;
      }

      /* ---------- SAVE AUTH ---------- */

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      /* ---------- REDIRECT ---------- */

      router.push("/admin");
    } catch (error: unknown) {
      const err =
        error as AxiosError<ApiError>;

      setError(
        err.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================
     UI
  ========================= */

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">

      <div className="w-full max-w-md rounded-2xl bg-gray-900 p-8 shadow-xl">

        {/* ================= HEADING ================= */}

        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Admin Panel Login
        </h1>

        {/* ================= ERROR ================= */}

        {error && (
          <p className="mb-4 rounded bg-red-500/10 p-3 text-sm text-red-400">
            {error}
          </p>
        )}

        {/* ================= FORM ================= */}

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(
              e: ChangeEvent<HTMLInputElement>
            ) =>
              setEmail(e.target.value)
            }
            required
          />

          {/* PASSWORD */}

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(
              e: ChangeEvent<HTMLInputElement>
            ) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading
              ? "Signing in..."
              : "Login as Admin"}
          </button>
        </form>

        {/* ================= FOOTER ================= */}

        <p className="mt-6 text-center text-sm text-gray-400">
          Secure Admin Access Only 🔐
        </p>
      </div>
    </div>
  );
}