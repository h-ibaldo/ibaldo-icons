import { SvelteComponent } from 'svelte';

export interface VRHeadset3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRHeadset3 extends SvelteComponent<VRHeadset3Props> {}
