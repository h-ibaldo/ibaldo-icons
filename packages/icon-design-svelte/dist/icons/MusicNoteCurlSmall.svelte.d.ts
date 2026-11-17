import { SvelteComponent } from 'svelte';

export interface MusicNoteCurlSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MusicNoteCurlSmall extends SvelteComponent<MusicNoteCurlSmallProps> {}
