import { SvelteComponent } from 'svelte';

export interface ChartBarStackedAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarStackedAxis extends SvelteComponent<ChartBarStackedAxisProps> {}
