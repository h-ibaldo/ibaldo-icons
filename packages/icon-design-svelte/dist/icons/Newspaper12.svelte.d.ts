import { SvelteComponent } from 'svelte';

export interface Newspaper12Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Newspaper12 extends SvelteComponent<Newspaper12Props> {}
