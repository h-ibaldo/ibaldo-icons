import { SvelteComponent } from 'svelte';

export interface FileMusicCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMusicCut extends SvelteComponent<FileMusicCutProps> {}
