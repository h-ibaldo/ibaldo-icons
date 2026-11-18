import { SvelteComponent } from 'svelte';

export interface PaperclipFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipFlipped extends SvelteComponent<PaperclipFlippedProps> {}
