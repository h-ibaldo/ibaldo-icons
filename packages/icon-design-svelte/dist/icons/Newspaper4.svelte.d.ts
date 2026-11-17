import { SvelteComponent } from 'svelte';

export interface Newspaper4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper4 extends SvelteComponent<Newspaper4Props> {}
