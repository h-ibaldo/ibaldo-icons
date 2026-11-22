import { SvelteComponent } from 'svelte';

export interface FolderArrowUpCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowUpCorner extends SvelteComponent<FolderArrowUpCornerProps> {}
