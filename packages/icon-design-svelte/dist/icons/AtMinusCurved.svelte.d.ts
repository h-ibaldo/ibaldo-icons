import { SvelteComponent } from 'svelte';

export interface AtMinusCurvedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AtMinusCurved extends SvelteComponent<AtMinusCurvedProps> {}
