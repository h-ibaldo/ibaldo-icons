import { SvelteComponent } from 'svelte';

export interface CloudArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudArrowRight extends SvelteComponent<CloudArrowRightProps> {}
