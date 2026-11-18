import { SvelteComponent } from 'svelte';

export interface ArrowUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpRightCircle extends SvelteComponent<ArrowUpRightCircleProps> {}
