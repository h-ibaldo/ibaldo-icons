import { SvelteComponent } from 'svelte';

export interface WindowChartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowChart extends SvelteComponent<WindowChartProps> {}
