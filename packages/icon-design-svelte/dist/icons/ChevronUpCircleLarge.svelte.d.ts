import { SvelteComponent } from 'svelte';

export interface ChevronUpCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpCircleLarge extends SvelteComponent<ChevronUpCircleLargeProps> {}
