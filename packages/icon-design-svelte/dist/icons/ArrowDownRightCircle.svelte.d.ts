import { SvelteComponent } from 'svelte';

export interface ArrowDownRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowDownRightCircle extends SvelteComponent<ArrowDownRightCircleProps> {}
