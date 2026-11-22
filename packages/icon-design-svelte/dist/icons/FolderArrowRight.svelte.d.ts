import { SvelteComponent } from 'svelte';

export interface FolderArrowRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowRight extends SvelteComponent<FolderArrowRightProps> {}
