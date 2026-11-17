import { SvelteComponent } from 'svelte';

export interface VRDeviceDimensionsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRDeviceDimensions extends SvelteComponent<VRDeviceDimensionsProps> {}
