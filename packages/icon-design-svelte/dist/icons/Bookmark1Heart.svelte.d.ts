import { SvelteComponent } from 'svelte';

export interface Bookmark1HeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Heart extends SvelteComponent<Bookmark1HeartProps> {}
