import { SvelteComponent } from 'svelte';

export interface ArrowLeftRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowLeftRightCircle extends SvelteComponent<ArrowLeftRightCircleProps> {}
