import { SvelteComponent } from 'svelte';

export interface VRCubeFramed2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRCubeFramed2 extends SvelteComponent<VRCubeFramed2Props> {}
