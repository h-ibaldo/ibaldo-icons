import { SvelteComponent } from 'svelte';

export interface CompassXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassX extends SvelteComponent<CompassXProps> {}
