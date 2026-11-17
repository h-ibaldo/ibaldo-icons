import { SvelteComponent } from 'svelte';

export interface DiscDriveOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiscDriveOff extends SvelteComponent<DiscDriveOffProps> {}
