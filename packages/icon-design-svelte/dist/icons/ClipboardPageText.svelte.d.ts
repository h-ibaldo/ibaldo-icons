import { SvelteComponent } from 'svelte';

export interface ClipboardPageTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPageText extends SvelteComponent<ClipboardPageTextProps> {}
