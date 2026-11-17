import { SvelteComponent } from 'svelte';

export interface ClipboardListPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListPlus extends SvelteComponent<ClipboardListPlusProps> {}
