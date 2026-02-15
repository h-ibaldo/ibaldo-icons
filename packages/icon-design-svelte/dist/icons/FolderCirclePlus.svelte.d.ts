import { SvelteComponent } from 'svelte';

export interface FolderCirclePlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCirclePlus extends SvelteComponent<FolderCirclePlusProps> {}
