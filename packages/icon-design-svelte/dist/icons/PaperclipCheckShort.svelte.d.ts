import { SvelteComponent } from 'svelte';

export interface PaperclipCheckShortProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckShort extends SvelteComponent<PaperclipCheckShortProps> {}
