import { SvelteComponent } from 'svelte';

export interface BrowserMegaphoneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserMegaphone extends SvelteComponent<BrowserMegaphoneProps> {}
