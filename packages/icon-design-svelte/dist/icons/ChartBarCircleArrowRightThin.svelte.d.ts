import { SvelteComponent } from 'svelte';

export interface ChartBarCircleArrowRightThinProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarCircleArrowRightThin extends SvelteComponent<ChartBarCircleArrowRightThinProps> {}
