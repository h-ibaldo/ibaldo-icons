import { SvelteComponent } from 'svelte';

export interface CameraProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Camera extends SvelteComponent<CameraProps> {}
