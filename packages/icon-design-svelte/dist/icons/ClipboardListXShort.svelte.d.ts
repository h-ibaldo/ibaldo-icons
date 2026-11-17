import { SvelteComponent } from 'svelte';

export interface ClipboardListXShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListXShort extends SvelteComponent<ClipboardListXShortProps> {}
