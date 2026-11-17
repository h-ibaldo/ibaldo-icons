import { SvelteComponent } from 'svelte';

export interface Newspaper6Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper6 extends SvelteComponent<Newspaper6Props> {}
