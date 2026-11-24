import { SvelteComponent } from 'svelte';

export interface WindowChartArrowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChartArrow extends SvelteComponent<WindowChartArrowProps> {}
