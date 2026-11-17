import { SvelteComponent } from 'svelte';

export interface ClipboardBracketsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardBrackets extends SvelteComponent<ClipboardBracketsProps> {}
