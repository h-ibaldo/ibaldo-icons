import { SvelteComponent } from 'svelte';

export interface CloudMusicTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMusicTall extends SvelteComponent<CloudMusicTallProps> {}
