import { SvelteComponent } from 'svelte';

export interface FolderOpenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpen extends SvelteComponent<FolderOpenProps> {}
