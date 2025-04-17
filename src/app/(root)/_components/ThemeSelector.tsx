"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleOff, Cloud, Laptop, Moon, Palette, Sun } from "lucide-react";
import useMounted from "@/hooks/useMounted";
import { editor } from 'monaco-editor';

const THEMES: { id: editor.BuiltinTheme; label: string; icon: React.ReactNode }[] = [
  { id: "vs-dark", label: "Dark", icon: <Moon className="size-4" /> },
  { id: "vs", label: "Light", icon: <Sun className="size-4" /> },
  { id: "hc-black", label: "High Contrast Dark", icon: <Laptop className="size-4" /> },
  { id: "hc-light", label: "High Contrast Light", icon: <Cloud className="size-4" /> },
];

function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();
  const { theme, setTheme } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTheme = THEMES.find((t) => t.id === theme);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 group relative flex items-center gap-2 px-4 py-2.5 bg-[#1e1e2e]/80 hover:bg-[#262637] 
        rounded-lg transition-all duration-200 border border-gray-800/50 hover:border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        <Palette className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />

        <div className="flex-1 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
            {currentTheme?.label || "Theme"}
          </span>
          {currentTheme?.icon || <CircleOff className="size-4 text-gray-400" />}
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-[#1e1e2e] rounded-lg shadow-lg border border-gray-800/50 overflow-hidden z-50"
          >
            {THEMES.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => {
                  setTheme(themeOption.id);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#262637] transition-colors"
              >
                {themeOption.icon}
                <span className="text-sm font-medium text-gray-300">{themeOption.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSelector;