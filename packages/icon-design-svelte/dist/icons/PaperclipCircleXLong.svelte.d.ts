import { SvelteComponent } from 'svelte';

export interface PaperclipCircleXLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleXLong extends SvelteComponent<PaperclipCircleXLongProps> {}
