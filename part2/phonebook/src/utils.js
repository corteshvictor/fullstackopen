const startCase = (value) =>
  typeof value === "string"
    ? value
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, (string) => string.toUpperCase())
    : "";

export { startCase };
