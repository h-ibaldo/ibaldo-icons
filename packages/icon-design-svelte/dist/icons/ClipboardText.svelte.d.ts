import { SvelteComponent } from 'svelte';

export interface ClipboardTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardText extends SvelteComponent<ClipboardTextProps> {}
