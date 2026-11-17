import { SvelteComponent } from 'svelte';

export interface House11Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House11 extends SvelteComponent<House11Props> {}
