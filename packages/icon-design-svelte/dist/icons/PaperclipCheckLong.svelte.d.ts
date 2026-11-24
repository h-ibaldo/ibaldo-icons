import { SvelteComponent } from 'svelte';

export interface PaperclipCheckLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckLong extends SvelteComponent<PaperclipCheckLongProps> {}
