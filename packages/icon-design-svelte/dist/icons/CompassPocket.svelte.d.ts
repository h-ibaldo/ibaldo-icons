import { SvelteComponent } from 'svelte';

export interface CompassPocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassPocket extends SvelteComponent<CompassPocketProps> {}
