import { SvelteComponent } from 'svelte';

export interface PaperclipCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCurl extends SvelteComponent<PaperclipCurlProps> {}
