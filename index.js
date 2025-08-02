#!/usr/bin/env node

import axios from 'axios';

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log("Please provide a command.");
    process.exit(1);
  }

  const command = args[0];

  switch(command) {
    case "hello":
      console.log("Hello from DuneScript!");
      break;

    case "check":
      const pkg = args[1];
      if (!pkg) {
        console.log("Please specify a package to check.");
      } else {
        console.log(`Checking package: ${pkg} ...`);
        try {
          const res = await axios.get(`https://registry.npmjs.org/${pkg}`);
          const latestVersion = res.data['dist-tags'].latest;
          console.log(`Latest version: ${latestVersion}`);
          // TODO: المزيد من التحليل هنا
        } catch (err) {
          console.error("Failed to fetch package info:", err.message);
        }
      }
      break;

    default:
      console.log(`Unknown command: ${command}`);
  }
}

main();
