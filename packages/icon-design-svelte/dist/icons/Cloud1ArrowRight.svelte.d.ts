import { SvelteComponent } from 'svelte';

export interface Cloud1ArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Cloud1ArrowRight extends SvelteComponent<Cloud1ArrowRightProps> {}
