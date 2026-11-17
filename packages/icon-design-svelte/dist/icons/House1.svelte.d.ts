import { SvelteComponent } from 'svelte';

export interface House1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House1 extends SvelteComponent<House1Props> {}
