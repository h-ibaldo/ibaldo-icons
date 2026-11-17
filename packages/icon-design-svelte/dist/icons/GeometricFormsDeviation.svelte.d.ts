import { SvelteComponent } from 'svelte';

export interface GeometricFormsDeviationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GeometricFormsDeviation extends SvelteComponent<GeometricFormsDeviationProps> {}
