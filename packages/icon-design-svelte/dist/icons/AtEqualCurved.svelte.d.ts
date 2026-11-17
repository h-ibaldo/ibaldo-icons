import { SvelteComponent } from 'svelte';

export interface AtEqualCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtEqualCurved extends SvelteComponent<AtEqualCurvedProps> {}
