import { SvelteComponent } from 'svelte';

export interface ClipboardShortlistProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardShortlist extends SvelteComponent<ClipboardShortlistProps> {}
