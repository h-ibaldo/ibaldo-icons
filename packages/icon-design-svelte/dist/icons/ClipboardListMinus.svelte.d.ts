import { SvelteComponent } from 'svelte';

export interface ClipboardListMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListMinus extends SvelteComponent<ClipboardListMinusProps> {}
