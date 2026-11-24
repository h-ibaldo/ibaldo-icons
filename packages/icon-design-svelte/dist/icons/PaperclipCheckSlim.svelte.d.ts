import { SvelteComponent } from 'svelte';

export interface PaperclipCheckSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheckSlim extends SvelteComponent<PaperclipCheckSlimProps> {}
