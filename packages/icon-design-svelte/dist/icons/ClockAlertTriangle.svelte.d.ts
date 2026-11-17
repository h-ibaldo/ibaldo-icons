import { SvelteComponent } from 'svelte';

export interface ClockAlertTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClockAlertTriangle extends SvelteComponent<ClockAlertTriangleProps> {}
