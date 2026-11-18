import { SvelteComponent } from 'svelte';

export interface CompassCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassCheck extends SvelteComponent<CompassCheckProps> {}
