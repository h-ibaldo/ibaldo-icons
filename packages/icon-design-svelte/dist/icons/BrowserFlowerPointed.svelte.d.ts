import { SvelteComponent } from 'svelte';

export interface BrowserFlowerPointedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserFlowerPointed extends SvelteComponent<BrowserFlowerPointedProps> {}
