export type HistoryItem = {
  command: string;
  output: string[];
};

export type CommandMap = {
  [key: string]: string[];
};
