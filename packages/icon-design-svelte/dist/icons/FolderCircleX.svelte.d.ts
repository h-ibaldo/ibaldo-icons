import { SvelteComponent } from 'svelte';

export interface FolderCircleXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCircleX extends SvelteComponent<FolderCircleXProps> {}
