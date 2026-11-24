import { SvelteComponent } from 'svelte';

export interface PaperclipPlusFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusFlipped extends SvelteComponent<PaperclipPlusFlippedProps> {}
