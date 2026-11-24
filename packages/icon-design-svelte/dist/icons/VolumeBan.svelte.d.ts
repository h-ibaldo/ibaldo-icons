import { SvelteComponent } from 'svelte';

export interface VolumeBanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeBan extends SvelteComponent<VolumeBanProps> {}
