"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { HistoryItem } from "@/types";
import { commands, BOOT_MESSAGES } from "@/lib/commands";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [input, setInput] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on click anywhere in terminal
  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInput("");
      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);
      return;
    }

    // Open resume PDF in a new tab
    if (trimmed === "resume") {
      window.open("/resume.pdf", "_blank");
    }

    const output = commands[trimmed] ?? [
      `Command not found: ${trimmed}. Type 'help' to see available commands.`,
    ];

    setHistory((prev) => [...prev, { command: trimmed, output }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setInput("");
    setHistoryIndex(-1);
  }, [input]);

  const handleHistoryUp = useCallback(() => {
    if (commandHistory.length === 0) return;

    const newIndex =
      historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);

    setHistoryIndex(newIndex);
    setInput(commandHistory[newIndex]);
  }, [commandHistory, historyIndex]);

  const handleHistoryDown = useCallback(() => {
    if (historyIndex === -1) return;

    const newIndex = historyIndex + 1;
    if (newIndex >= commandHistory.length) {
      setHistoryIndex(-1);
      setInput("");
    } else {
      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }
  }, [commandHistory, historyIndex]);

  return (
    <div
      className="w-full rounded-lg border border-gray-700 shadow-2xl shadow-black/50 overflow-hidden"
      onClick={focusInput}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-sm text-gray-400">saba@portfolio: ~</span>
      </div>

      {/* Terminal body */}
      <div
        ref={scrollRef}
        className="p-4 h-[70vh] overflow-y-auto bg-gray-900 font-mono text-sm leading-relaxed"
      >
        <TerminalOutput history={history} bootMessages={BOOT_MESSAGES} />
        <TerminalInput
          ref={inputRef}
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          onHistoryUp={handleHistoryUp}
          onHistoryDown={handleHistoryDown}
        />
      </div>
    </div>
  );
}
