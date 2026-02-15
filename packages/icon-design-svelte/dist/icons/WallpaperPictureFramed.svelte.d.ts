import { SvelteComponent } from 'svelte';

export interface WallpaperPictureFramedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WallpaperPictureFramed extends SvelteComponent<WallpaperPictureFramedProps> {}
