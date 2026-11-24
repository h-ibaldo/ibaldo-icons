import { SvelteComponent } from 'svelte';

export interface CameraRetroProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraRetro extends SvelteComponent<CameraRetroProps> {}
