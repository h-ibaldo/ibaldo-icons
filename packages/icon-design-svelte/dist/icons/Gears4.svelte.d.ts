import { SvelteComponent } from 'svelte';

export interface Gears4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gears4 extends SvelteComponent<Gears4Props> {}
