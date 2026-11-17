import { SvelteComponent } from 'svelte';

export interface BrowserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Browser extends SvelteComponent<BrowserProps> {}
