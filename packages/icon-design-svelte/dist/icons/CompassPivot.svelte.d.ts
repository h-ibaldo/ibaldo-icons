import { SvelteComponent } from 'svelte';

export interface CompassPivotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CompassPivot extends SvelteComponent<CompassPivotProps> {}
