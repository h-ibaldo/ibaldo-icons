import { SvelteComponent } from 'svelte';

export interface Newspaper1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper1 extends SvelteComponent<Newspaper1Props> {}
