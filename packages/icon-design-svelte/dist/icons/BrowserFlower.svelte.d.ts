import { SvelteComponent } from 'svelte';

export interface BrowserFlowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserFlower extends SvelteComponent<BrowserFlowerProps> {}
