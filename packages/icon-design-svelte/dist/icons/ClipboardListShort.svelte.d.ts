import { SvelteComponent } from 'svelte';

export interface ClipboardListShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListShort extends SvelteComponent<ClipboardListShortProps> {}
