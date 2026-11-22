import { SvelteComponent } from 'svelte';

export interface FolderArrowUpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowUp extends SvelteComponent<FolderArrowUpProps> {}
