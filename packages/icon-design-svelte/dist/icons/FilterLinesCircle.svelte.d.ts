import { SvelteComponent } from 'svelte';

export interface FilterLinesCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilterLinesCircle extends SvelteComponent<FilterLinesCircleProps> {}
