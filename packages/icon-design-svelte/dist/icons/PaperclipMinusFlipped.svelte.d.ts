import { SvelteComponent } from 'svelte';

export interface PaperclipMinusFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusFlipped extends SvelteComponent<PaperclipMinusFlippedProps> {}
