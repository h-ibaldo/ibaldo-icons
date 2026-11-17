import { SvelteComponent } from 'svelte';

export interface ChartBarArrowRightThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarArrowRightThin extends SvelteComponent<ChartBarArrowRightThinProps> {}
