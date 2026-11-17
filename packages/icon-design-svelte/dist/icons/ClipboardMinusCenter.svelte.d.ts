import { SvelteComponent } from 'svelte';

export interface ClipboardMinusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardMinusCenter extends SvelteComponent<ClipboardMinusCenterProps> {}
