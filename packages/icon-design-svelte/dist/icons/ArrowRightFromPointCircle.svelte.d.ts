import { SvelteComponent } from 'svelte';

export interface ArrowRightFromPointCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightFromPointCircle extends SvelteComponent<ArrowRightFromPointCircleProps> {}
