import { SvelteComponent } from 'svelte';

export interface CompassSquareOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassSquareOff extends SvelteComponent<CompassSquareOffProps> {}
