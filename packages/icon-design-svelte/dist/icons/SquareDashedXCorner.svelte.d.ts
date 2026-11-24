import { SvelteComponent } from 'svelte';

export interface SquareDashedXCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareDashedXCorner extends SvelteComponent<SquareDashedXCornerProps> {}
