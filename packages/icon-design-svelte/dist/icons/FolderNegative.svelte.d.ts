import { SvelteComponent } from 'svelte';

export interface FolderNegativeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderNegative extends SvelteComponent<FolderNegativeProps> {}
