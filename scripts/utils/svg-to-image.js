/**
 * SVG to Image Utility
 *
 * Converts SVG files to PNG images for AI vision analysis
 * Uses sharp library for fast, lightweight conversion
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

/**
 * Convert SVG to PNG image
 * @param {string} svgPath - Path to SVG file
 * @param {number} size - Output image size (default 512x512)
 * @returns {Promise<Buffer>} PNG image buffer
 */
export async function svgToPng(svgPath, size = 512) {
  try {
    const svgBuffer = fs.readFileSync(svgPath);

    // Convert SVG to PNG using sharp
    const pngBuffer = await sharp(svgBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 } // White background
      })
      .png()
      .toBuffer();

    return pngBuffer;
  } catch (error) {
    throw new Error(`Failed to convert ${path.basename(svgPath)} to PNG: ${error.message}`);
  }
}

/**
 * Convert SVG to base64 PNG for API
 * @param {string} svgPath - Path to SVG file
 * @param {number} size - Output image size
 * @returns {Promise<string>} Base64 encoded PNG
 */
export async function svgToBase64(svgPath, size = 512) {
  const pngBuffer = await svgToPng(svgPath, size);
  return pngBuffer.toString('base64');
}

/**
 * Convert multiple SVGs to base64 PNGs (batch)
 * @param {string[]} svgPaths - Array of SVG file paths
 * @param {number} size - Output image size
 * @returns {Promise<Array<{path: string, base64: string}>>}
 */
export async function batchSvgToBase64(svgPaths, size = 512) {
  const results = [];

  for (const svgPath of svgPaths) {
    try {
      const base64 = await svgToBase64(svgPath, size);
      results.push({
        path: svgPath,
        filename: path.basename(svgPath),
        base64
      });
    } catch (error) {
      console.error(`Error converting ${path.basename(svgPath)}:`, error.message);
      results.push({
        path: svgPath,
        filename: path.basename(svgPath),
        error: error.message
      });
    }
  }

  return results;
}
