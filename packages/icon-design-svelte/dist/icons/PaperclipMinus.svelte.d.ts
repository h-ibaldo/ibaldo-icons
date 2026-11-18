import { SvelteComponent } from 'svelte';

export interface PaperclipMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinus extends SvelteComponent<PaperclipMinusProps> {}
