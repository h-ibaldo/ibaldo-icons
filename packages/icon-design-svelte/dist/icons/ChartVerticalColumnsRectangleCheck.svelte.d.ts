import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsRectangleCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsRectangleCheck extends SvelteComponent<ChartVerticalColumnsRectangleCheckProps> {}
