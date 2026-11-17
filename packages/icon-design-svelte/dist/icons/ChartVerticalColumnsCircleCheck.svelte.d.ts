import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsCircleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsCircleCheck extends SvelteComponent<ChartVerticalColumnsCircleCheckProps> {}
