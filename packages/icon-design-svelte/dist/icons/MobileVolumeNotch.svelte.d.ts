import { SvelteComponent } from 'svelte';

export interface MobileVolumeNotchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileVolumeNotch extends SvelteComponent<MobileVolumeNotchProps> {}
