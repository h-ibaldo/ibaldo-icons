import { SvelteComponent } from 'svelte';

export interface ClipboardMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardMinus extends SvelteComponent<ClipboardMinusProps> {}
