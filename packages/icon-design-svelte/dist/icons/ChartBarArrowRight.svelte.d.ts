import { SvelteComponent } from 'svelte';

export interface ChartBarArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarArrowRight extends SvelteComponent<ChartBarArrowRightProps> {}
