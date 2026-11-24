import { SvelteComponent } from 'svelte';

export interface PaperclipCheckCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckCurl extends SvelteComponent<PaperclipCheckCurlProps> {}
