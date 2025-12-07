import { zip } from 'zip-a-folder';
import { promises as fs } from 'fs';
import { join } from 'path';

export async function GET() {
  const zipPath = '/tmp/icons.zip';
  const iconsPath = join(process.cwd(), 'static', 'icons', 'popular');
  await zip(iconsPath, zipPath);
  const file = await fs.readFile(zipPath);
  return new Response(file, {
    headers: { 'Content-Type': 'application/zip' },
  });
}
