import { SvelteComponent } from 'svelte';

export interface PaperclipXLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXLong extends SvelteComponent<PaperclipXLongProps> {}
