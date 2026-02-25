import { SvelteComponent } from 'svelte';

export interface VrAugmentedRealityArRectangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrAugmentedRealityArRectangle extends SvelteComponent<VrAugmentedRealityArRectangleProps> {}
