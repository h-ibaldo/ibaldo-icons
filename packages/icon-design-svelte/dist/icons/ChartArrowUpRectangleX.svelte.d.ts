import { SvelteComponent } from 'svelte';

export interface ChartArrowUpRectangleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartArrowUpRectangleX extends SvelteComponent<ChartArrowUpRectangleXProps> {}
