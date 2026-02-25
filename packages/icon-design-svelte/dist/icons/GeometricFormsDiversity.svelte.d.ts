import { SvelteComponent } from 'svelte';

export interface GeometricFormsDiversityProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GeometricFormsDiversity extends SvelteComponent<GeometricFormsDiversityProps> {}
