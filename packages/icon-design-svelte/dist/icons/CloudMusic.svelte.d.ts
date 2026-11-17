import { SvelteComponent } from 'svelte';

export interface CloudMusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusic extends SvelteComponent<CloudMusicProps> {}
