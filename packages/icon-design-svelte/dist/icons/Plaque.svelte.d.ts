import { SvelteComponent } from 'svelte';

export interface PlaqueProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Plaque extends SvelteComponent<PlaqueProps> {}
