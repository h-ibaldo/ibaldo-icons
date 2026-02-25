import { SvelteComponent } from 'svelte';

export interface Bookmark1TwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1Two extends SvelteComponent<Bookmark1TwoProps> {}
