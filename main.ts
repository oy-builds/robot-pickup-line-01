// The Robot Pickup Line Championship — entry program.
// Reads the pickup line stored in entry.txt (beside this file) and writes it
// to the competition output path, /output/entry.txt.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.txt");

let line: string;
try {
  line = readFileSync(sourcePath, "utf8");
} catch (err) {
  console.error(`error: could not read the pickup line from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// Enforce the competition gate locally before writing anything: the entry
// must be one non-empty line of 1–200 characters. Failing here is far better
// than shipping an entry the sealed scorer rejects.
if (line.trim().length === 0) {
  console.error(`error: ${sourcePath} is empty or only whitespace`);
  process.exit(1);
}
if (line.length > 200) {
  console.error(`error: entry is ${line.length} characters, over the 200-character limit`);
  process.exit(1);
}
if (line.includes("\n") || line.includes("\r")) {
  console.error(`error: entry must be a single line`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, line, "utf8");

// Verify the write landed intact: a partial or corrupted copy would silently
// change the judged entry, so fail loudly instead of exiting 0.
if (readFileSync(outPath, "utf8") !== line) {
  console.error(`error: verification failed — ${outPath} does not match ${sourcePath}`);
  process.exit(1);
}

console.log(`wrote ${line.length}-character entry to ${outPath}`);
