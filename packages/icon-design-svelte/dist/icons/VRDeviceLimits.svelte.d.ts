import { SvelteComponent } from 'svelte';

export interface VRDeviceLimitsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRDeviceLimits extends SvelteComponent<VRDeviceLimitsProps> {}
