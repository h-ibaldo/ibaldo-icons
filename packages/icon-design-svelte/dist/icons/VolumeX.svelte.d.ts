import { SvelteComponent } from 'svelte';

export interface VolumeXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeX extends SvelteComponent<VolumeXProps> {}
