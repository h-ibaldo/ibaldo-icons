import { SvelteComponent } from 'svelte';

export interface Gears2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gears2 extends SvelteComponent<Gears2Props> {}
