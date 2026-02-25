import { SvelteComponent } from 'svelte';

export interface Airplay1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Airplay1 extends SvelteComponent<Airplay1Props> {}
