import { SvelteComponent } from 'svelte';

export interface AtDotsCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtDotsCurved extends SvelteComponent<AtDotsCurvedProps> {}
