import { SvelteComponent } from 'svelte';

export interface ClipboardProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Clipboard extends SvelteComponent<ClipboardProps> {}
