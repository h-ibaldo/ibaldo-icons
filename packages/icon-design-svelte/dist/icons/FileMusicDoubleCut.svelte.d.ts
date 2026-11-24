import { SvelteComponent } from 'svelte';

export interface FileMusicDoubleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMusicDoubleCut extends SvelteComponent<FileMusicDoubleCutProps> {}
