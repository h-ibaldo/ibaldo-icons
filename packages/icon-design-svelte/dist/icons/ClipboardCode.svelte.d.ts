import { SvelteComponent } from 'svelte';

export interface ClipboardCodeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardCode extends SvelteComponent<ClipboardCodeProps> {}
