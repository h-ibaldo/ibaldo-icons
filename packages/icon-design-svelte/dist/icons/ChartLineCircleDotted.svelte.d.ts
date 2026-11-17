import { SvelteComponent } from 'svelte';

export interface ChartLineCircleDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartLineCircleDotted extends SvelteComponent<ChartLineCircleDottedProps> {}
