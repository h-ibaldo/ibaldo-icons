import { SvelteComponent } from 'svelte';

export interface VRCubeDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRCubeDashed extends SvelteComponent<VRCubeDashedProps> {}
