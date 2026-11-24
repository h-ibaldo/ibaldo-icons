import { SvelteComponent } from 'svelte';

export interface ChartBarThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarThin extends SvelteComponent<ChartBarThinProps> {}
