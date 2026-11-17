import { SvelteComponent } from 'svelte';

export interface CloudMusicDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusicDouble extends SvelteComponent<CloudMusicDoubleProps> {}
