import { SvelteComponent } from 'svelte';

export interface CompassOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassOff extends SvelteComponent<CompassOffProps> {}
