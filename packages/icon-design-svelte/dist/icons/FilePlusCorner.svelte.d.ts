import { SvelteComponent } from 'svelte';

export interface FilePlusCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FilePlusCorner extends SvelteComponent<FilePlusCornerProps> {}
