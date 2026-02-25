import { SvelteComponent } from 'svelte';

export interface VrAugmentedRealityDeviceLimitsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrAugmentedRealityDeviceLimits extends SvelteComponent<VrAugmentedRealityDeviceLimitsProps> {}
