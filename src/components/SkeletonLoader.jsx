'use client';

import { Skeleton } from "./ui/skeleton.jsx";

export default function SkeletonLoader() {
  return (
    <div className="min-h-screen w-full bg-cream transition-colors duration-300 overflow-hidden px-6 pt-6 pb-20 select-none">
      {/* 1. Navbar Skeleton using Shadcn */}
      <div className="mx-auto max-w-6xl flex items-center justify-between py-4 border-b hairline">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-xl" />
          <div className="space-y-1">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-2.5 w-16" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-8 w-16 rounded-full" />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Skeleton className="h-9 w-9 rounded-full" />
          <Skeleton className="h-9 w-24 rounded-full" />
        </div>
      </div>

      {/* 2. Hero Section Skeleton using Shadcn */}
      <div className="mx-auto max-w-6xl pt-16 sm:pt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content Skeleton */}
        <div className="lg:col-span-7 space-y-6">
          <Skeleton className="h-7 w-48 rounded-full" />

          <div className="space-y-3 pt-2">
            <Skeleton className="h-12 sm:h-14 w-full rounded-2xl" />
            <Skeleton className="h-12 sm:h-14 w-4/5 rounded-2xl" />
            <Skeleton className="h-10 sm:h-12 w-3/5 rounded-2xl" />
          </div>

          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-2/3" />
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Skeleton className="h-11 w-32 rounded-full" />
            <Skeleton className="h-11 w-36 rounded-full" />
            <Skeleton className="h-11 w-28 rounded-full" />
          </div>

          <div className="flex gap-2 pt-4">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-16 rounded-full" />
            ))}
          </div>
        </div>

        {/* Right Badge Skeleton */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-72 h-[410px] rounded-[28px] border hairline p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-4 w-12 rounded-full" />
            </div>
            <Skeleton className="w-full h-44 rounded-2xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-36" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-6 w-full rounded-lg" />
          </div>
        </div>
      </div>

      {/* 3. Section Skeletons (Projects & Timeline) using Shadcn */}
      <div className="mx-auto max-w-6xl mt-24 space-y-16">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-64 rounded-xl" />
          <Skeleton className="h-4 w-96 max-w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-3xl border hairline p-6 space-y-4 h-64 flex flex-col justify-between"
            >
              <div className="flex justify-between">
                <Skeleton className="h-10 w-10 rounded-xl" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="h-8 w-28 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
