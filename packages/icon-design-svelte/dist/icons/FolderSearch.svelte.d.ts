import { SvelteComponent } from 'svelte';

export interface FolderSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderSearch extends SvelteComponent<FolderSearchProps> {}
