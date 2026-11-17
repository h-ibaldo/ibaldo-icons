import { SvelteComponent } from 'svelte';

export interface Newspaper8Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper8 extends SvelteComponent<Newspaper8Props> {}
