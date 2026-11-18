import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleOutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircleOut extends SvelteComponent<ArrowRightCircleOutProps> {}
