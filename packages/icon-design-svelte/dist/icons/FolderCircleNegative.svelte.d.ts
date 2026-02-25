import { SvelteComponent } from 'svelte';

export interface FolderCircleNegativeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCircleNegative extends SvelteComponent<FolderCircleNegativeProps> {}
