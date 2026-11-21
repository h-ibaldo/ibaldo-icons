import { SvelteComponent } from 'svelte';

export interface CameraBoxProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraBox extends SvelteComponent<CameraBoxProps> {}
