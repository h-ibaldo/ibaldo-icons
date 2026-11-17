import { SvelteComponent } from 'svelte';

export interface Newspaper10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper10 extends SvelteComponent<Newspaper10Props> {}
