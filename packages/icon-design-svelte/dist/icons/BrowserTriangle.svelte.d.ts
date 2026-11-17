import { SvelteComponent } from 'svelte';

export interface BrowserTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserTriangle extends SvelteComponent<BrowserTriangleProps> {}
