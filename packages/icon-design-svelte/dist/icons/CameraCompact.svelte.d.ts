import { SvelteComponent } from 'svelte';

export interface CameraCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CameraCompact extends SvelteComponent<CameraCompactProps> {}
