import { SvelteComponent } from 'svelte';

export interface ImageWaveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageWave extends SvelteComponent<ImageWaveProps> {}
