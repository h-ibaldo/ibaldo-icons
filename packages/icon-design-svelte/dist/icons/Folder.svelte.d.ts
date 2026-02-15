import { SvelteComponent } from 'svelte';

export interface FolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Folder extends SvelteComponent<FolderProps> {}
