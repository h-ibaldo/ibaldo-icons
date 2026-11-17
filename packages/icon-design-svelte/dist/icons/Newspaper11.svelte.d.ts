import { SvelteComponent } from 'svelte';

export interface Newspaper11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper11 extends SvelteComponent<Newspaper11Props> {}
