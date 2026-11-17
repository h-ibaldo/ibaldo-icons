import { SvelteComponent } from 'svelte';

export interface RotatedSquareMediumProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotatedSquareMedium extends SvelteComponent<RotatedSquareMediumProps> {}
