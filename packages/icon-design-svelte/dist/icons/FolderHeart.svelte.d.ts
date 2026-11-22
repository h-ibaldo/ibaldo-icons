import { SvelteComponent } from 'svelte';

export interface FolderHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderHeart extends SvelteComponent<FolderHeartProps> {}
