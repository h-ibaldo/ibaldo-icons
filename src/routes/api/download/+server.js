import { zip } from 'zip-a-folder'; // Use a zip library
import { promises as fs } from 'fs';

export async function GET() {
  const zipPath = '/tmp/icons.zip';
  await zip('./icons', zipPath);
  const file = await fs.readFile(zipPath);
  return new Response(file, {
    headers: { 'Content-Type': 'application/zip' },
  });
}
