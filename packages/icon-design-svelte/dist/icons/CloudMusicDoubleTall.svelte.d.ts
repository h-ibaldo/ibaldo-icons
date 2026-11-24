import { SvelteComponent } from 'svelte';

export interface CloudMusicDoubleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusicDoubleTall extends SvelteComponent<CloudMusicDoubleTallProps> {}
