"use client";

import Link from "next/link";
import {
  FiUsers,
  FiCalendar,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";

export default function ClubSphereHowItWorks({ className = "" }) {
  const steps = [
    {
      id: 1,
      title: "Create or Join a Club",
      desc: "Sign up quickly and either create your own club or explore public clubs that match your interests.",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Plan Events & Schedules",
      desc: "Use smart tools to schedule meetups, assign organizers, and sync events with calendars.",
      icon: <FiCalendar className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Communicate Easily",
      desc: "Group chats, announcements, and discussions keep all members engaged and informed.",
      icon: <FiMessageCircle className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Track Progress & Confirm",
      desc: "Record attendance, mark tasks completed, and keep everything organized effortlessly.",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
  ];

  return (
    <section
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-blue-50 to-purple-50 rounded-2xl mb-8 shadow-xl text-slate-900 ${className}`}
      aria-labelledby="how-it-works"
    >
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <div className="space-y-3">
          <h2
            id="how-it-works"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0092b8]"
          >
            How ClubSphere Works
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed">
            A clean and simple workflow that helps you manage clubs effortlessly
            — from joining or creating a club to managing events, communication,
            and progress tracking.
          </p>
        </div>

        <Link
          href="/Clubs"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#0092b8] text-white rounded-xl text-sm font-semibold shadow hover:bg-[#007a99] transition"
        >
          Get Started
        </Link>
      </div>

      {/* STEPS */}
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((s) => (
          <li
            key={s.id}
            className="p-6 bg-white rounded-2xl shadow-md border border-slate-200 hover:shadow-xl transition"
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* ICON */}
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-[#0092b8]/10 text-[#0092b8] shrink-0">
                {s.icon}
              </div>

              {/* TEXT */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  {s.title}
                </h3>
                <span className="text-xs text-orange-500 font-medium">
                  Step {s.id}
                </span>

                <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                  {s.desc}
                </p>

                <Link
                  href="/Clubs"
                  className="mt-3 inline-block text-xs font-medium text-[#0092b8] hover:underline"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
