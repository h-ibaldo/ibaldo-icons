import { SvelteComponent } from 'svelte';

export interface Bookmark1NumberTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bookmark1NumberTwo extends SvelteComponent<Bookmark1NumberTwoProps> {}
