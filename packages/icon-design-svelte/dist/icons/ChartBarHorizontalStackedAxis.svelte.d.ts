import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalStackedAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontalStackedAxis extends SvelteComponent<ChartBarHorizontalStackedAxisProps> {}
