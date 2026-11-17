import { SvelteComponent } from 'svelte';

export interface Tab3ArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3ArrowRight extends SvelteComponent<Tab3ArrowRightProps> {}
