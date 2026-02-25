import { SvelteComponent } from 'svelte';

export interface VrDeviceGlassesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrDeviceGlasses extends SvelteComponent<VrDeviceGlassesProps> {}
