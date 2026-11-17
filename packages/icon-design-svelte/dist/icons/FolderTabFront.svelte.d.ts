import { SvelteComponent } from 'svelte';

export interface FolderTabFrontProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderTabFront extends SvelteComponent<FolderTabFrontProps> {}
