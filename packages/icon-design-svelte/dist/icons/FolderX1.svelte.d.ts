import { SvelteComponent } from 'svelte';

export interface FolderX1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderX1 extends SvelteComponent<FolderX1Props> {}
