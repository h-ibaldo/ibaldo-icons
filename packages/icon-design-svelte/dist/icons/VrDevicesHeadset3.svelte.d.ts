import { SvelteComponent } from 'svelte';

export interface VrDevicesHeadset3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrDevicesHeadset3 extends SvelteComponent<VrDevicesHeadset3Props> {}
