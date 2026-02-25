import { SvelteComponent } from 'svelte';

export interface Gears1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gears1 extends SvelteComponent<Gears1Props> {}
