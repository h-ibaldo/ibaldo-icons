import { SvelteComponent } from 'svelte';

export interface ArrowRightFromDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightFromDotCircle extends SvelteComponent<ArrowRightFromDotCircleProps> {}
