import { SvelteComponent } from 'svelte';

export interface CompassProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Compass extends SvelteComponent<CompassProps> {}
