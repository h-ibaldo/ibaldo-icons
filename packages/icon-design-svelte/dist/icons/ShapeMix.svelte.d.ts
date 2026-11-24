import { SvelteComponent } from 'svelte';

export interface ShapeMixProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ShapeMix extends SvelteComponent<ShapeMixProps> {}
