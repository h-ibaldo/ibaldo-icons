import { SvelteComponent } from 'svelte';

export interface VolumeHighOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeHighOff extends SvelteComponent<VolumeHighOffProps> {}
