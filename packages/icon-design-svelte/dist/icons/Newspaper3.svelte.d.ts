import { SvelteComponent } from 'svelte';

export interface Newspaper3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper3 extends SvelteComponent<Newspaper3Props> {}
