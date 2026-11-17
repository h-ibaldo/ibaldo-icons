import { SvelteComponent } from 'svelte';

export interface House3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House3 extends SvelteComponent<House3Props> {}
