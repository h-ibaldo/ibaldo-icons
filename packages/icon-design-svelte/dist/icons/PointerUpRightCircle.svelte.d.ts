import { SvelteComponent } from 'svelte';

export interface PointerUpRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerUpRightCircle extends SvelteComponent<PointerUpRightCircleProps> {}
