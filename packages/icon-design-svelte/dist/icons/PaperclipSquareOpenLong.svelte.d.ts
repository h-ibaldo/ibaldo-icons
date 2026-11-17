import { SvelteComponent } from 'svelte';

export interface PaperclipSquareOpenLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSquareOpenLong extends SvelteComponent<PaperclipSquareOpenLongProps> {}
