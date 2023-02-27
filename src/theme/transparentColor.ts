const percentToHex = (opacity: number) => {
  const intValue = Math.round((opacity / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
};

const transparentColor = (color: string, opacity: number) => {
  return color + percentToHex(opacity);
};

export default transparentColor;
