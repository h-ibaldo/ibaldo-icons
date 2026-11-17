import { SvelteComponent } from 'svelte';

export interface Newspaper7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper7 extends SvelteComponent<Newspaper7Props> {}
