import { SvelteComponent } from 'svelte';

export interface CameraSyncProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraSync extends SvelteComponent<CameraSyncProps> {}
