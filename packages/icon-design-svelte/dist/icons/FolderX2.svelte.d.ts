import { SvelteComponent } from 'svelte';

export interface FolderX2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderX2 extends SvelteComponent<FolderX2Props> {}
