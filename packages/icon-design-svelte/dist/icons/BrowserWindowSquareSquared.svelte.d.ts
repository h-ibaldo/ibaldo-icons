import { SvelteComponent } from 'svelte';

export interface BrowserWindowSquareSquaredProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowSquareSquared extends SvelteComponent<BrowserWindowSquareSquaredProps> {}
