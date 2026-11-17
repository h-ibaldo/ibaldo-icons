import { SvelteComponent } from 'svelte';

export interface LayoutGridImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LayoutGridImage extends SvelteComponent<LayoutGridImageProps> {}
