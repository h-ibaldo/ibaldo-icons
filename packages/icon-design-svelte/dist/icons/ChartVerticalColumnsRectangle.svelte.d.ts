import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsRectangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsRectangle extends SvelteComponent<ChartVerticalColumnsRectangleProps> {}
