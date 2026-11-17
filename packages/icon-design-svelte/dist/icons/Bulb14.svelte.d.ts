import { SvelteComponent } from 'svelte';

export interface Bulb14Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bulb14 extends SvelteComponent<Bulb14Props> {}
