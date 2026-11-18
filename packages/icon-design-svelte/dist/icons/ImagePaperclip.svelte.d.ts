import { SvelteComponent } from 'svelte';

export interface ImagePaperclipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePaperclip extends SvelteComponent<ImagePaperclipProps> {}
