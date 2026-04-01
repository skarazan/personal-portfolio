"use client";

import { forwardRef, KeyboardEvent } from "react";

type TerminalInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onHistoryUp: () => void;
  onHistoryDown: () => void;
};

const TerminalInput = forwardRef<HTMLInputElement, TerminalInputProps>(
  function TerminalInput({ value, onChange, onSubmit, onHistoryUp, onHistoryDown }, ref) {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        onSubmit();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        onHistoryUp();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        onHistoryDown();
      }
    };

    return (
      <div className="flex items-center gap-0 shrink-0">
        <span className="text-green-400">saba@portfolio</span>
        <span className="text-gray-400">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-gray-400">$ </span>
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-gray-100 caret-green-400 ml-1"
          autoFocus
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
        />
      </div>
    );
  }
);

export default TerminalInput;
