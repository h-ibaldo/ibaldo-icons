import { SvelteComponent } from 'svelte';

export interface ChartBarMixedThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarMixedThin extends SvelteComponent<ChartBarMixedThinProps> {}
