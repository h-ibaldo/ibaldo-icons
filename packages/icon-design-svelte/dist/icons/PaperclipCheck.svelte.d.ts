import { SvelteComponent } from 'svelte';

export interface PaperclipCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaperclipCheck extends SvelteComponent<PaperclipCheckProps> {}
