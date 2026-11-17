import { SvelteComponent } from 'svelte';

export interface LayoutLargeFlowerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutLargeFlower extends SvelteComponent<LayoutLargeFlowerProps> {}
