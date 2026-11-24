import { SvelteComponent } from 'svelte';

export interface PointerShineLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerShineLarge extends SvelteComponent<PointerShineLargeProps> {}
