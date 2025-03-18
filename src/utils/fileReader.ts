import * as fs from 'fs';

/**
 * Reads a file and splits it into lines, removing empty lines.
 * @param filePath - Path to the file
 * @returns Array of non-empty lines from the file.
 */
export function readTestFile(filePath: string): string[] {
  try {
    return fs.readFileSync(filePath, 'utf8')
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    process.exit(1);
  }
}
