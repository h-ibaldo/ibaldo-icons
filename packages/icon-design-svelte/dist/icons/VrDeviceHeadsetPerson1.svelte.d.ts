import { SvelteComponent } from 'svelte';

export interface VrDeviceHeadsetPerson1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrDeviceHeadsetPerson1 extends SvelteComponent<VrDeviceHeadsetPerson1Props> {}
