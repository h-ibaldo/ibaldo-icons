import { SvelteComponent } from 'svelte';

export interface VRHeadsetPerson1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRHeadsetPerson1 extends SvelteComponent<VRHeadsetPerson1Props> {}
