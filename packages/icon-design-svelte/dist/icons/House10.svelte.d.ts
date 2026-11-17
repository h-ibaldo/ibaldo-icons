import { SvelteComponent } from 'svelte';

export interface House10Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House10 extends SvelteComponent<House10Props> {}
