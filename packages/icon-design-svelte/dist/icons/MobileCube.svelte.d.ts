import { SvelteComponent } from 'svelte';

export interface MobileCubeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileCube extends SvelteComponent<MobileCubeProps> {}
