import { SvelteComponent } from 'svelte';

export interface PaperclipSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSlim extends SvelteComponent<PaperclipSlimProps> {}
