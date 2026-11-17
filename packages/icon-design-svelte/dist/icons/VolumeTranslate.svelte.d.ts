import { SvelteComponent } from 'svelte';

export interface VolumeTranslateProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class VolumeTranslate extends SvelteComponent<VolumeTranslateProps> {}
