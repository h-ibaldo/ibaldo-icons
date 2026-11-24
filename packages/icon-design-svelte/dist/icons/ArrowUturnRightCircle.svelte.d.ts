import { SvelteComponent } from 'svelte';

export interface ArrowUturnRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnRightCircle extends SvelteComponent<ArrowUturnRightCircleProps> {}
