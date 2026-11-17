import { SvelteComponent } from 'svelte';

export interface ChartBarArrowDownThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarArrowDownThin extends SvelteComponent<ChartBarArrowDownThinProps> {}
