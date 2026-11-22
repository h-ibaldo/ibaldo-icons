import { SvelteComponent } from 'svelte';

export interface ChartSplineAxisProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartSplineAxis extends SvelteComponent<ChartSplineAxisProps> {}
