
//Function to put the first letter on Uppercase
export const firstUpperCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

//Fuction that print the height
export const conversionHeight = (number) => {
  const meter = number / 10;
  const feet = Math.floor(meter * 3.28084);
  const inches = Math.round((meter * 3.28084 - feet) * 12);
  const conversionHeight = `${meter} m ( ${feet}" ${inches}' )`;
  return conversionHeight;
};