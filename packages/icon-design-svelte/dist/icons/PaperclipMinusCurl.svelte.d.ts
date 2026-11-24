import { SvelteComponent } from 'svelte';

export interface PaperclipMinusCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusCurl extends SvelteComponent<PaperclipMinusCurlProps> {}
