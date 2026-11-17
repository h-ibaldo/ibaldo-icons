import { SvelteComponent } from 'svelte';

export interface House5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House5 extends SvelteComponent<House5Props> {}
