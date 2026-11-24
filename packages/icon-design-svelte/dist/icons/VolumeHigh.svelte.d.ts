import { SvelteComponent } from 'svelte';

export interface VolumeHighProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeHigh extends SvelteComponent<VolumeHighProps> {}
