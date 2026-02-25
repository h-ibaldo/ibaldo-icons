import { SvelteComponent } from 'svelte';

export interface GeometricFormsVariationProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GeometricFormsVariation extends SvelteComponent<GeometricFormsVariationProps> {}
