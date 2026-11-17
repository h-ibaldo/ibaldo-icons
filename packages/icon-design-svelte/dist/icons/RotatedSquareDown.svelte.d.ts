import { SvelteComponent } from 'svelte';

export interface RotatedSquareDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RotatedSquareDown extends SvelteComponent<RotatedSquareDownProps> {}
