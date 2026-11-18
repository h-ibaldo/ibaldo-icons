import { SvelteComponent } from 'svelte';

export interface ArrowRightCircleInProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRightCircleIn extends SvelteComponent<ArrowRightCircleInProps> {}
