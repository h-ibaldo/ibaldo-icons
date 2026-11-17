import { SvelteComponent } from 'svelte';

export interface ClipboardListPlusShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListPlusShort extends SvelteComponent<ClipboardListPlusShortProps> {}
