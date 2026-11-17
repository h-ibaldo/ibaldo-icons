import { SvelteComponent } from 'svelte';

export interface CloudSquareArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSquareArrowRight extends SvelteComponent<CloudSquareArrowRightProps> {}
