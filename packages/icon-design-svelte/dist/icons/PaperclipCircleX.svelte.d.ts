import { SvelteComponent } from 'svelte';

export interface PaperclipCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCircleX extends SvelteComponent<PaperclipCircleXProps> {}
