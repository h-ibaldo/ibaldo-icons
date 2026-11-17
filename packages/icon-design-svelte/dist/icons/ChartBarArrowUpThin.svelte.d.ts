import { SvelteComponent } from 'svelte';

export interface ChartBarArrowUpThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarArrowUpThin extends SvelteComponent<ChartBarArrowUpThinProps> {}
