import { SvelteComponent } from 'svelte';

export interface ClipboardPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPlus extends SvelteComponent<ClipboardPlusProps> {}
