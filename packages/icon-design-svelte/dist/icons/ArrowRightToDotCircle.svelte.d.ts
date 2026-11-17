import { SvelteComponent } from 'svelte';

export interface ArrowRightToDotCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightToDotCircle extends SvelteComponent<ArrowRightToDotCircleProps> {}
