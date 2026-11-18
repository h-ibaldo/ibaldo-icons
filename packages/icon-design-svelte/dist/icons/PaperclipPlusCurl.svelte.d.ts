import { SvelteComponent } from 'svelte';

export interface PaperclipPlusCurlProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusCurl extends SvelteComponent<PaperclipPlusCurlProps> {}
