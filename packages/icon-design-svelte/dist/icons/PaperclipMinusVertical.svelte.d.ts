import { SvelteComponent } from 'svelte';

export interface PaperclipMinusVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipMinusVertical extends SvelteComponent<PaperclipMinusVerticalProps> {}
