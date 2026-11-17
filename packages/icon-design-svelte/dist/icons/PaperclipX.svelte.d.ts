import { SvelteComponent } from 'svelte';

export interface PaperclipXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipX extends SvelteComponent<PaperclipXProps> {}
