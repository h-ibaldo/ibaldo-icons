import { SvelteComponent } from 'svelte';

export interface PaperclipSquareOpenShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSquareOpenShort extends SvelteComponent<PaperclipSquareOpenShortProps> {}
