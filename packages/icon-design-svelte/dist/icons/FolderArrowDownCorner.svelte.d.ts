import { SvelteComponent } from 'svelte';

export interface FolderArrowDownCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowDownCorner extends SvelteComponent<FolderArrowDownCornerProps> {}
