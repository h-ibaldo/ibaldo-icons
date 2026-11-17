import { SvelteComponent } from 'svelte';

export interface VRGlassesProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VRGlasses extends SvelteComponent<VRGlassesProps> {}
