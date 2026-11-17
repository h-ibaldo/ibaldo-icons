import { SvelteComponent } from 'svelte';

export interface FolderMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderMinus extends SvelteComponent<FolderMinusProps> {}
