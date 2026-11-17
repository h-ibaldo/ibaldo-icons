import { SvelteComponent } from 'svelte';

export interface ArrowConvergeRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowConvergeRightCircle extends SvelteComponent<ArrowConvergeRightCircleProps> {}
