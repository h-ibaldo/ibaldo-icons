import { SvelteComponent } from 'svelte';

export interface ClipboardShortlistPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardShortlistPlus extends SvelteComponent<ClipboardShortlistPlusProps> {}
