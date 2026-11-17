import { SvelteComponent } from 'svelte';

export interface FolderPerspectiveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderPerspective extends SvelteComponent<FolderPerspectiveProps> {}
