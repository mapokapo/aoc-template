import fs from "fs/promises";

async function main() {
  const data = await fs.readFile("data.txt", "utf-8");

  // Your code here
}

main();
