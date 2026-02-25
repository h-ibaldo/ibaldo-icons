import { SvelteComponent } from 'svelte';

export interface WallpaperPictureDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WallpaperPictureDashed extends SvelteComponent<WallpaperPictureDashedProps> {}
