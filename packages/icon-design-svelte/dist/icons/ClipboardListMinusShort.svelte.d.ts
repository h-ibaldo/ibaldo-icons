import { SvelteComponent } from 'svelte';

export interface ClipboardListMinusShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListMinusShort extends SvelteComponent<ClipboardListMinusShortProps> {}
