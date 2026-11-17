import { SvelteComponent } from 'svelte';

export interface BrowserWindowSquareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowSquare extends SvelteComponent<BrowserWindowSquareProps> {}
