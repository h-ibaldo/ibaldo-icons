import { SvelteComponent } from 'svelte';

export interface FolderArrowRightCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowRightCorner extends SvelteComponent<FolderArrowRightCornerProps> {}
