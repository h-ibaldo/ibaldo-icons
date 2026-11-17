import { SvelteComponent } from 'svelte';

export interface VRCubeFramed1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRCubeFramed1 extends SvelteComponent<VRCubeFramed1Props> {}
