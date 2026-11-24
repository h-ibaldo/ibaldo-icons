import { SvelteComponent } from 'svelte';

export interface MobileVolumeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileVolume extends SvelteComponent<MobileVolumeProps> {}
