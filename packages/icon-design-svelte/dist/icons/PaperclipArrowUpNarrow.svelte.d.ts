import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpNarrow extends SvelteComponent<PaperclipArrowUpNarrowProps> {}
