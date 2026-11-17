import { SvelteComponent } from 'svelte';

export interface Newspaper2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper2 extends SvelteComponent<Newspaper2Props> {}
