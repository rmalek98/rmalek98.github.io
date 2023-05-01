const name = (id) => document.getElementById(id);

const polygon = () => {
  const num = validateEntry(("polygon").value);
  ("output").innerHTML = `Polygon: ${getShape(num)}`;
};

const validateEntry = (num) => Math.abs(Math.round(Number(num)));

const getShape = (num) => {
  if (num === 1) return "monogon";
  if (num === 2) return "bigon";
  if (num === 3) return "triangle";
  if (num === 4) return "quadrilateral";
  if (num === 5) return "pentagon";
  if (num === 6) return "hexagon";
  if (num === 7) return "heptagon";
  if (num === 8) return "octagon";
  if (num === 9) return "nonagon";
  if (num === 10) return "decagon";
  return "Please enter a valid number";
};
