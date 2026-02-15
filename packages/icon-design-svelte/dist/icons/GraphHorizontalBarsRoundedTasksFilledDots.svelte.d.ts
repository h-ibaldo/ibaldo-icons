import { SvelteComponent } from 'svelte';

export interface GraphHorizontalBarsRoundedTasksFilledDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GraphHorizontalBarsRoundedTasksFilledDots extends SvelteComponent<GraphHorizontalBarsRoundedTasksFilledDotsProps> {}
