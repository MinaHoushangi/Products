// Trim whitespace, convert to uppercase, and remove all whitespace
const getSeatchText = (text: string) => {
  if (text.length === 0) return text;

  return text.trim().toUpperCase().replace(/\s+/g, '');
};

export {getSeatchText};
