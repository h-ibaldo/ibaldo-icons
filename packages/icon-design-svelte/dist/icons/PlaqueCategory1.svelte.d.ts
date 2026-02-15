import { SvelteComponent } from 'svelte';

export interface PlaqueCategory1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlaqueCategory1 extends SvelteComponent<PlaqueCategory1Props> {}
