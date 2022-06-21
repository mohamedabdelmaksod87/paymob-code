let A = [100, 200, 100];
let B = [50, 100, 100];

function validateInputs(A, B, x, y) {
  if (!A.length || !B.length || !x || !y) return "Invalid input";

  if (A.length !== B.length) return "Invalid Icons Coordinates";

  if (!Number.isInteger(x) || !Number.isInteger(y)) return "Invalid tap Input";

  if (x > 1919 || x < 0) return "tab-X position is out of range ";

  if (y > 1919 || y < 0) return "tab-Y position is out of range ";

  if (!A.every((num) => Number.isInteger(num)))
    return "Invalid Icon-X Position";

  if (!B.every((num) => Number.isInteger(num)))
    return "Invalid Icon-Y Position";

  for (const num of A) {
    if (num > 1919 || num < 0) return "Icon-X Position is out of range";
  }

  for (const num of B) {
    if (num > 1919 || num < 0) return "Icon-Y Position is out of range";
  }
  return "valid";
}

function findTheIcon(A, B, x, y) {
  const result = validateInputs(A, B, x, y);

  if (result === "valid") {
    let position = A.findIndex(
      (x_position, index) => (x - x_position) ** 2 + (y - B[index]) ** 2 <= 400
    );
    return position;
  }

  return result;
}

console.log(findTheIcon(A, B, 200, 60));
