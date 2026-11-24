import { SvelteComponent } from 'svelte';

export interface PaperclipXFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXFlipped extends SvelteComponent<PaperclipXFlippedProps> {}
