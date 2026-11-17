import { SvelteComponent } from 'svelte';

export interface PaperclipXCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXCurl extends SvelteComponent<PaperclipXCurlProps> {}
