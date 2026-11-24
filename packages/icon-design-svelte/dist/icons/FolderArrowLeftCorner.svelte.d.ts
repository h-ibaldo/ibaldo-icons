import { SvelteComponent } from 'svelte';

export interface FolderArrowLeftCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowLeftCorner extends SvelteComponent<FolderArrowLeftCornerProps> {}
