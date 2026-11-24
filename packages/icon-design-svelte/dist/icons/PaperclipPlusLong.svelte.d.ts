import { SvelteComponent } from 'svelte';

export interface PaperclipPlusLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusLong extends SvelteComponent<PaperclipPlusLongProps> {}
