import { SvelteComponent } from 'svelte';

export interface HardDriveDiscProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HardDriveDisc extends SvelteComponent<HardDriveDiscProps> {}
