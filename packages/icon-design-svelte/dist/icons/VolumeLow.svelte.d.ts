import { SvelteComponent } from 'svelte';

export interface VolumeLowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeLow extends SvelteComponent<VolumeLowProps> {}
