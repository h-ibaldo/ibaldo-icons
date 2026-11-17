import { SvelteComponent } from 'svelte';

export interface AtCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtCurved extends SvelteComponent<AtCurvedProps> {}
