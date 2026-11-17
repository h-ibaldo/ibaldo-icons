import { SvelteComponent } from 'svelte';

export interface PaperclipSquareLongProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipSquareLong extends SvelteComponent<PaperclipSquareLongProps> {}
