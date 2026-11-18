import { SvelteComponent } from 'svelte';

export interface CompassTicksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassTicks extends SvelteComponent<CompassTicksProps> {}
