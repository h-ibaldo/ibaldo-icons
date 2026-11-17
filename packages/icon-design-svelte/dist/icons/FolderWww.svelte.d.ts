import { SvelteComponent } from 'svelte';

export interface FolderWwwProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderWww extends SvelteComponent<FolderWwwProps> {}
