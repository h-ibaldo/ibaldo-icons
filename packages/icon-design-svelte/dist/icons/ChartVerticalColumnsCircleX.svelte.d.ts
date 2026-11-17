import { SvelteComponent } from 'svelte';

export interface ChartVerticalColumnsCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartVerticalColumnsCircleX extends SvelteComponent<ChartVerticalColumnsCircleXProps> {}
