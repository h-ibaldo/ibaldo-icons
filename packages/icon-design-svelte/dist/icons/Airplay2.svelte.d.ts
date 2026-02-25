import { SvelteComponent } from 'svelte';

export interface Airplay2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Airplay2 extends SvelteComponent<Airplay2Props> {}
