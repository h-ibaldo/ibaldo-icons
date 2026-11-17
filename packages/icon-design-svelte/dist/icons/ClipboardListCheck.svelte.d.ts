import { SvelteComponent } from 'svelte';

export interface ClipboardListCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardListCheck extends SvelteComponent<ClipboardListCheckProps> {}
