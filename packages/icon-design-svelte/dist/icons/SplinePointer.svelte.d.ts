import { SvelteComponent } from 'svelte';

export interface SplinePointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SplinePointer extends SvelteComponent<SplinePointerProps> {}
