import { SvelteComponent } from 'svelte';

export interface PaperclipPlusNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusNarrow extends SvelteComponent<PaperclipPlusNarrowProps> {}
