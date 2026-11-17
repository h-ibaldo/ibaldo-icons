import { SvelteComponent } from 'svelte';

export interface PaperclipNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipNarrow extends SvelteComponent<PaperclipNarrowProps> {}
