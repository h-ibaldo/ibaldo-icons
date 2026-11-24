import { SvelteComponent } from 'svelte';

export interface CameraOffOverlapProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraOffOverlap extends SvelteComponent<CameraOffOverlapProps> {}
