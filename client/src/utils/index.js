export const getInitials = (name) => {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
};
