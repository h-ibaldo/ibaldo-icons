import { SvelteComponent } from 'svelte';

export interface ClipboardPlusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardPlusCenter extends SvelteComponent<ClipboardPlusCenterProps> {}
