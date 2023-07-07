export const shortenNumber = (number) => {
  if (number < 1000) {
    return number.toString(); // Return the number as is if it's less than 1000
  } else {
    let suffixes = ["", "k", "M", "B", "T"]; // Define the suffixes for each magnitude
    let magnitude = Math.floor(Math.log10(number) / 3); // Calculate the magnitude (e.g., 3 for thousands, 6 for millions, etc.)
    let shortNumber = number / Math.pow(10, magnitude * 3); // Divide the number by the magnitude to get the shortened value
    shortNumber = shortNumber.toFixed(1); // Keep one decimal place (e.g., 10.5k instead of 10.55k)
    return shortNumber + suffixes[magnitude]; // Append the suffix to the shortened value
  }
};
