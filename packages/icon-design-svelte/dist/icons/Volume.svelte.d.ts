import { SvelteComponent } from 'svelte';

export interface VolumeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Volume extends SvelteComponent<VolumeProps> {}
