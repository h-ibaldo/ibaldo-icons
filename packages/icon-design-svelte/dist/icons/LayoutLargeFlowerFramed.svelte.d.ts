import { SvelteComponent } from 'svelte';

export interface LayoutLargeFlowerFramedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutLargeFlowerFramed extends SvelteComponent<LayoutLargeFlowerFramedProps> {}
