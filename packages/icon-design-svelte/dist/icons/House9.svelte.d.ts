import { SvelteComponent } from 'svelte';

export interface House9Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House9 extends SvelteComponent<House9Props> {}
