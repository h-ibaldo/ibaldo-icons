import { SvelteComponent } from 'svelte';

export interface ImagePaperclipTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePaperclipTilted extends SvelteComponent<ImagePaperclipTiltedProps> {}
