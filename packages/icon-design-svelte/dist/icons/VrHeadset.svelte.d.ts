import { SvelteComponent } from 'svelte';

export interface VrHeadsetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VrHeadset extends SvelteComponent<VrHeadsetProps> {}
