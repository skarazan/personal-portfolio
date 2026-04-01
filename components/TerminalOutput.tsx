import { HistoryItem } from "@/types";

type TerminalOutputProps = {
  history: HistoryItem[];
  bootMessages: string[];
};

export default function TerminalOutput({
  history,
  bootMessages,
}: TerminalOutputProps) {
  return (
    <div className="flex flex-col gap-1">
      {/* Boot messages */}
      {bootMessages.map((line, i) => (
        <p key={`boot-${i}`} className="text-green-400">
          {line || "\u00A0"}
        </p>
      ))}

      {bootMessages.length > 0 && <div className="h-2" />}

      {/* Command history */}
      {history.map((entry, i) => (
        <div key={i} className="flex flex-col gap-0.5">
          <p>
            <span className="text-green-400">saba@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$ </span>
            <span className="text-gray-100">{entry.command}</span>
          </p>
          {entry.output.map((line, j) => (
            <p key={j} className="text-gray-300 pl-0">
              {line || "\u00A0"}
            </p>
          ))}
          <div className="h-1" />
        </div>
      ))}
    </div>
  );
}
