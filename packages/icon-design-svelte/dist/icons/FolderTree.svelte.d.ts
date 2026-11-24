import { SvelteComponent } from 'svelte';

export interface FolderTreeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderTree extends SvelteComponent<FolderTreeProps> {}
