import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsCircle extends SvelteComponent<ChartVerticalColumnsCircleProps> {}
