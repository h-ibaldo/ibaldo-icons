import { SvelteComponent } from 'svelte';

export interface Bookmark1NumberOneProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1NumberOne extends SvelteComponent<Bookmark1NumberOneProps> {}
