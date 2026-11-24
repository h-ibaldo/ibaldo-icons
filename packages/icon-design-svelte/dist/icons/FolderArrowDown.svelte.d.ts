import { SvelteComponent } from 'svelte';

export interface FolderArrowDownProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderArrowDown extends SvelteComponent<FolderArrowDownProps> {}
