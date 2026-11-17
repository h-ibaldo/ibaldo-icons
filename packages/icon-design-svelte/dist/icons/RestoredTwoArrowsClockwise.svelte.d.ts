import { SvelteComponent } from 'svelte';

export interface RestoredTwoArrowsClockwiseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RestoredTwoArrowsClockwise extends SvelteComponent<RestoredTwoArrowsClockwiseProps> {}
