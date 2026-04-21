interface ProcessedData {
  result: string;
  timestamp: Date;
  status: "success" | "error";
}

function processData(input: string): ProcessedData {
  return {
    result: input.trim().toUpperCase(),
    timestamp: new Date(),
    status: "success",
  };
}

export { processData, ProcessedData };
