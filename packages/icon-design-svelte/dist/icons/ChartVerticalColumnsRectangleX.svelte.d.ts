import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsRectangleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsRectangleX extends SvelteComponent<ChartVerticalColumnsRectangleXProps> {}
