import { SvelteComponent } from 'svelte';

export interface MobileVolumeButtonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileVolumeButton extends SvelteComponent<MobileVolumeButtonProps> {}
