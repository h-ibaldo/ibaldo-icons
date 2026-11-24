import { SvelteComponent } from 'svelte';

export interface ArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowRight extends SvelteComponent<ArrowRightProps> {}
