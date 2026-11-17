import { SvelteComponent } from 'svelte';

export interface CircleOverlapArrowUpRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleOverlapArrowUpRight extends SvelteComponent<CircleOverlapArrowUpRightProps> {}
