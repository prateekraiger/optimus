"use client";
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="relative flex flex-col items-center gap-6">
        {/* Logo/Brand pulse */}
        <div className="text-3xl font-display tracking-tighter animate-pulse">
          Optimus
        </div>
        
        {/* Progress line */}
        <div className="w-48 h-[1px] bg-foreground/10 overflow-hidden relative">
          <div className="absolute inset-0 bg-foreground animate-loading-bar" />
        </div>
        
        <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted-foreground animate-pulse">
          Initializing Infrastructure
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </div>
  )
}
