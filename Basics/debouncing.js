// debouncing.js
// This function creates a debounced version of the provided function.
function debounce(func, wait) {
  let timeout;
    return function executedFunction(...args) {
    const later = () => {
        clearTimeout(timeout);
        func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
}
// Example usage:
const logMessage = (message) => {
  console.log(`Logged: ${message}`);
};
const debouncedLogMessage = debounce(logMessage, 2000);
debouncedLogMessage("Hello, World!"); // Will log after 2 seconds





// input .02 word type
// let inputvalue = 'ri'
