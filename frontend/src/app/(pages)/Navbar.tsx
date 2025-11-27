"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AppShell({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const role = localStorage.getItem("user_role");
    const sessionToken = localStorage.getItem("token");

    if (!role || !sessionToken) {
      // If not logged in, redirect to login only if not already there
      if (typeof window !== "undefined" && window.location.pathname !== "/") {
        window.location.replace("/");
      }
    } else {
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* NAVBAR */}
      <header className="w-full fixed top-0 left-0 right-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            {/* Left: Logo + School Name */}
            <Link href="/home" className="flex items-center gap-3">
              <Image
                src="/school-logo.jpg"
                alt="School Logo"
                width={40}
                height={40}
                className="object-contain rounded"
              />
              <span className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                SMV school Dwarka
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content — leave space for fixed navbar */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
