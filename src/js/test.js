import menu from '../menu.json';

console.log(menu);

// 1. Export by default
// printText(text);
// export default printText;

// 2. Named Export (v.1)
// export const text = 'text test';
// export function printText(text) {
//   console.log(text);
// }

// 3. Named Export (v.2)
const text = 'text test';
function printText(text) {
  console.log(text);
}

export { text, printText };
