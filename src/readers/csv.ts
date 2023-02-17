import * as fs from 'fs';

const csvToArray = (path: string): string[][] => {
  const rawData = fs.readFileSync(path, 'utf-8');
  const lines = rawData.split('\n');
  return lines.map((line) => line.split(','));
};

export default csvToArray;