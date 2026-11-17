import { SvelteComponent } from 'svelte';

export interface PaperclipCheckNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckNarrow extends SvelteComponent<PaperclipCheckNarrowProps> {}
