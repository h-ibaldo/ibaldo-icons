import { SvelteComponent } from 'svelte';

export interface PlaqueCategory2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PlaqueCategory2 extends SvelteComponent<PlaqueCategory2Props> {}
