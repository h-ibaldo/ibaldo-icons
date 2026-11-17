import { SvelteComponent } from 'svelte';

export interface ArrowUturnDownCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUturnDownCircle extends SvelteComponent<ArrowUturnDownCircleProps> {}
