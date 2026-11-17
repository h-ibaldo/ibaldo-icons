import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsRectangleDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsRectangleDot extends SvelteComponent<ChartVerticalColumnsRectangleDotProps> {}
