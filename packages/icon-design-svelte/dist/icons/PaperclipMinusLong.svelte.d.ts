import { SvelteComponent } from 'svelte';

export interface PaperclipMinusLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusLong extends SvelteComponent<PaperclipMinusLongProps> {}
