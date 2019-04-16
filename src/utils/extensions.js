export function isPositiveInteger(value) {
  const numericSize = parseInt(value, 10);
  return (!Number.isNaN(numericSize)
    && Number.isInteger(numericSize)
    && numericSize > 0);
}
export default isPositiveInteger;
