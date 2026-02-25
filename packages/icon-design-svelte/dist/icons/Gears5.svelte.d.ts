import { SvelteComponent } from 'svelte';

export interface Gears5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Gears5 extends SvelteComponent<Gears5Props> {}
