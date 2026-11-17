import { SvelteComponent } from 'svelte';

export interface WarningTriangleAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangleAlt extends SvelteComponent<WarningTriangleAltProps> {}
