import { SvelteComponent } from 'svelte';

export interface PaperclipPlusShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusShort extends SvelteComponent<PaperclipPlusShortProps> {}
