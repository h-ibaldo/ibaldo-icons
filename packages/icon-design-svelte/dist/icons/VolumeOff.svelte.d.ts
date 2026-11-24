import { SvelteComponent } from 'svelte';

export interface VolumeOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeOff extends SvelteComponent<VolumeOffProps> {}
