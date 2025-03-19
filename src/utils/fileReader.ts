import * as fs from 'fs';

/**
 * Reads a file, removes empty lines, and returns an array of lines.
 * @param filePath - The path to the test file.
 * @returns Array of non-empty lines.
 * @throws Error if the file cannot be read.
 */
export function readTestFile(filePath: string): string[] {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const lines = fileContent.split('\n').map(line => line.trim());
    return lines.filter(line => line !== '');
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to read file: ${filePath}. Error: ${error.message}`);
    }
    throw new Error(`Failed to read file: ${filePath}. An unknown error occurred.`);
  }
}
