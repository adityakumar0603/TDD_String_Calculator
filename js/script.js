async function add(numbers) {
  if (numbers === "") return 0;

  // Handle custom delimiter
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = parts[0].slice(2); // Extract delimiter
    numbers = parts.slice(1).join("\n"); // Remove delimiter line
  }

  // Replace newline characters with the delimiter
  const regex = new RegExp(`[${delimiter}\n]`);
  const numArray = numbers.split(regex);

  let sum = 0;
  const negatives = [];

  numArray.forEach((num) => {
    const number = parseInt(num, 10);
    if (isNaN(number)) return; // Ignore non-numeric values

    if (number < 0) {
      negatives.push(number);
    } else {
      sum += number;
    }
  });

  if (negatives.length > 0) {
    document
      .getElementById("result")
      .setAttribute(
        "value",
        `negative numbers not allowed ${negatives.join(", ")}`
      );
    throw new Error(
      `Negative numbers are not allowed: ${negatives.join(", ")}`
    );
  }

  console.log(sum);
  document.getElementById("result").setAttribute("value", sum);
  //document.getElementById("result").value = sum;
}

module.exports = add;
