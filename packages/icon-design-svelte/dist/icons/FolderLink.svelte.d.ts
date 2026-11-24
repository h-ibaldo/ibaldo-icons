import { SvelteComponent } from 'svelte';

export interface FolderLinkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderLink extends SvelteComponent<FolderLinkProps> {}
