import { SvelteComponent } from 'svelte';

export interface FolderOpen2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpen2 extends SvelteComponent<FolderOpen2Props> {}
