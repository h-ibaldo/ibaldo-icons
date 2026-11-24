import { SvelteComponent } from 'svelte';

export interface CircleGridMarksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CircleGridMarks extends SvelteComponent<CircleGridMarksProps> {}
