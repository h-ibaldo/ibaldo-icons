import { SvelteComponent } from 'svelte';

export interface DiscDriveXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DiscDriveX extends SvelteComponent<DiscDriveXProps> {}
