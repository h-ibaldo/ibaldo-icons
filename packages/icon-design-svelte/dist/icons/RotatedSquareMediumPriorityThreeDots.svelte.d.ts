import { SvelteComponent } from 'svelte';

export interface RotatedSquareMediumPriorityThreeDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotatedSquareMediumPriorityThreeDots extends SvelteComponent<RotatedSquareMediumPriorityThreeDotsProps> {}
