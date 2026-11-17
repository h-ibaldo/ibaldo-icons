import { SvelteComponent } from 'svelte';

export interface ChartBarAxisThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarAxisThin extends SvelteComponent<ChartBarAxisThinProps> {}
