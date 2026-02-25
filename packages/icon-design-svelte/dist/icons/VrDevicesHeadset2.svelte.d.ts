import { SvelteComponent } from 'svelte';

export interface VrDevicesHeadset2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrDevicesHeadset2 extends SvelteComponent<VrDevicesHeadset2Props> {}
