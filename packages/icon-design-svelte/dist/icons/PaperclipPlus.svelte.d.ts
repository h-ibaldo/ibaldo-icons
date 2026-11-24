import { SvelteComponent } from 'svelte';

export interface PaperclipPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlus extends SvelteComponent<PaperclipPlusProps> {}
