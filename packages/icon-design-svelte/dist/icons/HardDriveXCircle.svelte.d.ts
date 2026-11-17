import { SvelteComponent } from 'svelte';

export interface HardDriveXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HardDriveXCircle extends SvelteComponent<HardDriveXCircleProps> {}
