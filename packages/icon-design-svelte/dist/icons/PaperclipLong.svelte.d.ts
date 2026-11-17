import { SvelteComponent } from 'svelte';

export interface PaperclipLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipLong extends SvelteComponent<PaperclipLongProps> {}
