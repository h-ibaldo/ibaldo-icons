import { SvelteComponent } from 'svelte';

export interface FolderOpenFrontProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpenFront extends SvelteComponent<FolderOpenFrontProps> {}
