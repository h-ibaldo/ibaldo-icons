import { SvelteComponent } from 'svelte';

export interface VrDevicesHeadset1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrDevicesHeadset1 extends SvelteComponent<VrDevicesHeadset1Props> {}
