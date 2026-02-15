import { SvelteComponent } from 'svelte';

export interface Gears3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gears3 extends SvelteComponent<Gears3Props> {}
