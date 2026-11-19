import { SvelteComponent } from 'svelte';

export interface ChevronDownCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownCircleLarge extends SvelteComponent<ChevronDownCircleLargeProps> {}
