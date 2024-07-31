// Export a const instance of WeakMap
export const weakMap = new WeakMap();

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Get the current count for this endpoint, or 0 if it doesn't exist
  let count = weakMap.get(endpoint) || 0;

  // Increment the count
  count++;

  // If count is 5 or more, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the count in the WeakMap
  weakMap.set(endpoint, count);
}
