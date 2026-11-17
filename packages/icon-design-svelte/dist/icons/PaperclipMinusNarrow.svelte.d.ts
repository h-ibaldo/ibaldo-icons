import { SvelteComponent } from 'svelte';

export interface PaperclipMinusNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusNarrow extends SvelteComponent<PaperclipMinusNarrowProps> {}
