import { SvelteComponent } from 'svelte';

export interface CompassRoseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassRose extends SvelteComponent<CompassRoseProps> {}
