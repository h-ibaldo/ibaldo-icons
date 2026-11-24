import { SvelteComponent } from 'svelte';

export interface ClipboardListCheckShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListCheckShort extends SvelteComponent<ClipboardListCheckShortProps> {}
