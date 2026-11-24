import { SvelteComponent } from 'svelte';

export interface ArrowOrbitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowOrbit extends SvelteComponent<ArrowOrbitProps> {}
