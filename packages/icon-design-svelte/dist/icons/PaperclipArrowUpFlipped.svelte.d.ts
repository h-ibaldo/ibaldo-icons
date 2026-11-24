import { SvelteComponent } from 'svelte';

export interface PaperclipArrowUpFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipArrowUpFlipped extends SvelteComponent<PaperclipArrowUpFlippedProps> {}
