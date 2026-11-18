import { SvelteComponent } from 'svelte';

export interface PaperclipXSlimProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipXSlim extends SvelteComponent<PaperclipXSlimProps> {}
