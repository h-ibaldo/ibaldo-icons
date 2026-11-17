import { SvelteComponent } from 'svelte';

export interface VRHeadset1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRHeadset1 extends SvelteComponent<VRHeadset1Props> {}
