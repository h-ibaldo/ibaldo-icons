import { SvelteComponent } from 'svelte';

export interface CameraDetailedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraDetailed extends SvelteComponent<CameraDetailedProps> {}
