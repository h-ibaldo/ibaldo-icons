import { SvelteComponent } from 'svelte';

export interface PaperclipShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipShort extends SvelteComponent<PaperclipShortProps> {}
