import { SvelteComponent } from 'svelte';

export interface PaperclipSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSquare extends SvelteComponent<PaperclipSquareProps> {}
