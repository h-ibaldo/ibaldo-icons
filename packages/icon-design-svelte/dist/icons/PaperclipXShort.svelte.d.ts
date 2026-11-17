import { SvelteComponent } from 'svelte';

export interface PaperclipXShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXShort extends SvelteComponent<PaperclipXShortProps> {}
