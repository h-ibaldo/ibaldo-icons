import { SvelteComponent } from 'svelte';

export interface WarningTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WarningTriangle extends SvelteComponent<WarningTriangleProps> {}
