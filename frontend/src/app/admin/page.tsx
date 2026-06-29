

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import type { LucideIcon } from "lucide-react";

import {
  DollarSign,
  Users,
  TrendingUp,
  Package,
  LogOut
} from "lucide-react";

// ✅ Uncomment and fix path according to your project structure
// import api from "@/lib/api";
// Line 10 ke paas ye add karo
import api from "../../lib/api";

/* =========================
   TYPES
========================= */


interface AdminUser {
  _id?: string;
  username: string;
  email?: string;
  role: string;
}

interface AuthResponse {
  data: AdminUser;
}

interface StatItem {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: string;
}

interface ActivityItem {
  user: string;
  action: string;
  time: string;
  color: string;
}

interface QuickAction {
  label: string;
  color: string;
}

/* =========================
   STATIC UI DATA
========================= */

const stats: StatItem[] = [
  {
    title: "Total Revenue",
    value: "$54,239",
    change: "+23.1%",
    icon: DollarSign,
    color: "bg-green-500"
  },
  {
    title: "Active Users",
    value: "3,458",
    change: "+5.2%",
    icon: Users,
    color: "bg-blue-500"
  },
  {
    title: "Total Projects",
    value: "142",
    change: "+12.4%",
    icon: Package,
    color: "bg-purple-500"
  },
  {
    title: "Growth Rate",
    value: "4.27%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "bg-orange-500"
  }
];

const recentActivities: ActivityItem[] = [
  {
    user: "Sarah Johnson",
    action: "created new project",
    time: "2 min ago",
    color: "bg-purple-500"
  },
  {
    user: "Mike Chen",
    action: "updated settings",
    time: "15 min ago",
    color: "bg-blue-500"
  },
  {
    user: "Emma Davis",
    action: "completed task",
    time: "1 hour ago",
    color: "bg-green-500"
  },
  {
    user: "Alex Turner",
    action: "added new member",
    time: "3 hours ago",
    color: "bg-orange-500"
  }
];

const quickActions: QuickAction[] = [
  {
    label: "Add New User",
    color: "bg-blue-100 text-blue-600"
  },
  {
    label: "Create Project",
    color: "bg-purple-100 text-purple-600"
  },
  {
    label: "Generate Report",
    color: "bg-green-100 text-green-600"
  },
  {
    label: "System Settings",
    color: "bg-gray-100 text-gray-600"
  }
];

/* =========================
   COMPONENT
========================= */

export default function AdminDashboard() {
  const router = useRouter();

  const [admin, setAdmin] =
    useState<AdminUser | null>(null);

  const [loading, setLoading] =
    useState<boolean>(true);

  /* =========================
     AUTH + ROLE CHECK
  ========================= */

  useEffect(() => {
    const verifyAdmin = async (): Promise<void> => {
      try {
        // ✅ Replace with your actual API instance
        const res = await api.get<AuthResponse>(
          "/auth/me"
        );

        const user = res.data.data;

        if (user.role !== "admin") {
          router.replace("/adminlogin");
          return;
        }

        setAdmin(user);
      } catch (error) {
        console.error(
          "Admin verification failed:",
          error
        );

        router.replace("/adminlogin");
      } finally {
        setLoading(false);
      }
    };

    verifyAdmin();
  }, [router]);

  /* =========================
     LOGOUT
  ========================= */

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    router.push("/adminlogin");
  };

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return null;
  }

  /* =========================
     UI
  ========================= */

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Dashboard Overview
          </h1>

          <p className="text-gray-600">
            Welcome back,{" "}
            <span className="font-medium">
              {admin?.username}
            </span>{" "}
            👋
          </p>
        </div>

        <div className="mt-4 flex space-x-3 md:mt-0">
          <button className="rounded-lg border border-gray-300 bg-white px-4 py-2 hover:bg-gray-50">
            Export Report
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            + New Project
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>

      {/* ================= STATS GRID ================= */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    {stat.value}
                  </p>

                  <p
                    className={`mt-1 text-sm ${
                      stat.change.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change} from last month
                  </p>
                </div>

                <div
                  className={`${stat.color} rounded-lg p-3 text-white`}
                >
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* ================= RECENT ACTIVITY ================= */}

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
          <h2 className="mb-6 text-lg font-semibold">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivities.map(
              (activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white font-semibold ${activity.color}`}
                  >
                    {activity.user.charAt(0)}
                  </div>

                  <div className="flex-1">
                    <p>
                      <span className="font-medium">
                        {activity.user}
                      </span>{" "}
                      {activity.action}
                    </p>

                    <p className="text-sm text-gray-500">
                      {activity.time}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* ================= QUICK ACTIONS ================= */}

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold">
            Quick Actions
          </h2>

          <div className="space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className={`w-full rounded-lg px-4 py-3 font-medium hover:opacity-90 ${action.color}`}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}