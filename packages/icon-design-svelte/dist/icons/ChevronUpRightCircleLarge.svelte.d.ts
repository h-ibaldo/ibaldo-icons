import { SvelteComponent } from 'svelte';

export interface ChevronUpRightCircleLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpRightCircleLarge extends SvelteComponent<ChevronUpRightCircleLargeProps> {}
