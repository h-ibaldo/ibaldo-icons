import { SvelteComponent } from 'svelte';

export interface PaperclipSquareOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSquareOpen extends SvelteComponent<PaperclipSquareOpenProps> {}
