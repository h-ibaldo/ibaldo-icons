import { SvelteComponent } from 'svelte';

export interface ChartBarAxisTwoProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarAxisTwo extends SvelteComponent<ChartBarAxisTwoProps> {}
