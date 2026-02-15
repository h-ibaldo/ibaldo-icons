import { SvelteComponent } from 'svelte';

export interface FolderPlus1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderPlus1 extends SvelteComponent<FolderPlus1Props> {}
