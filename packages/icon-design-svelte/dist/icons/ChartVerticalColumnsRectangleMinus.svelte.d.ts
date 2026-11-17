import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsRectangleMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsRectangleMinus extends SvelteComponent<ChartVerticalColumnsRectangleMinusProps> {}
