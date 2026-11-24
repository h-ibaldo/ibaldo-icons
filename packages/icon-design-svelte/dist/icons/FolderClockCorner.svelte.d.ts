import { SvelteComponent } from 'svelte';

export interface FolderClockCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderClockCorner extends SvelteComponent<FolderClockCornerProps> {}
