import { SvelteComponent } from 'svelte';

export interface ImagePaperclipCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImagePaperclipCurl extends SvelteComponent<ImagePaperclipCurlProps> {}
