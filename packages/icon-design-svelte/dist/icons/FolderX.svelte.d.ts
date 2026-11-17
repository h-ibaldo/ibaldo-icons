import { SvelteComponent } from 'svelte';

export interface FolderXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderX extends SvelteComponent<FolderXProps> {}
