import { SvelteComponent } from 'svelte';

export interface Newspaper5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper5 extends SvelteComponent<Newspaper5Props> {}
