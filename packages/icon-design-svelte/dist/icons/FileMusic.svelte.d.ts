import { SvelteComponent } from 'svelte';

export interface FileMusicProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMusic extends SvelteComponent<FileMusicProps> {}
