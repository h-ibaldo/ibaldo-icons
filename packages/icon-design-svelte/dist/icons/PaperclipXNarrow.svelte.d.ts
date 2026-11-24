import { SvelteComponent } from 'svelte';

export interface PaperclipXNarrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXNarrow extends SvelteComponent<PaperclipXNarrowProps> {}
