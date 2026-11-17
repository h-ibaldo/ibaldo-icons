import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircle extends SvelteComponent<ArrowRightCircleProps> {}
