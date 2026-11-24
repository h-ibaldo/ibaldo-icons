import { SvelteComponent } from 'svelte';

export interface ArrowUturnLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnLeftCircle extends SvelteComponent<ArrowUturnLeftCircleProps> {}
