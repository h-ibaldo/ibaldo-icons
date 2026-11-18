import { SvelteComponent } from 'svelte';

export interface FileCastCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCastCorner extends SvelteComponent<FileCastCornerProps> {}
