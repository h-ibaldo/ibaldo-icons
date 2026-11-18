import { SvelteComponent } from 'svelte';

export interface PaperclipPlusSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipPlusSlim extends SvelteComponent<PaperclipPlusSlimProps> {}
