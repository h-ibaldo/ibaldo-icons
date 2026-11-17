import { SvelteComponent } from 'svelte';

export interface VRCubeHalfProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRCubeHalf extends SvelteComponent<VRCubeHalfProps> {}
