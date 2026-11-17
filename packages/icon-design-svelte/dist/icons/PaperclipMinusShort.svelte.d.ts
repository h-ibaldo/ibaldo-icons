import { SvelteComponent } from 'svelte';

export interface PaperclipMinusShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusShort extends SvelteComponent<PaperclipMinusShortProps> {}
