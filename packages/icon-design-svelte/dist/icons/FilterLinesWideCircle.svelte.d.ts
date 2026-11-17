import { SvelteComponent } from 'svelte';

export interface FilterLinesWideCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesWideCircle extends SvelteComponent<FilterLinesWideCircleProps> {}
