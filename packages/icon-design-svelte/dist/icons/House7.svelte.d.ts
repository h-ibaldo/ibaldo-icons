import { SvelteComponent } from 'svelte';

export interface House7Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class House7 extends SvelteComponent<House7Props> {}
