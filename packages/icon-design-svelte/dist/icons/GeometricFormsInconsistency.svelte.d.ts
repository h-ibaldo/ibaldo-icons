import { SvelteComponent } from 'svelte';

export interface GeometricFormsInconsistencyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GeometricFormsInconsistency extends SvelteComponent<GeometricFormsInconsistencyProps> {}
