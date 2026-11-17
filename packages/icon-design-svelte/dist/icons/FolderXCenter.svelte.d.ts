import { SvelteComponent } from 'svelte';

export interface FolderXCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderXCenter extends SvelteComponent<FolderXCenterProps> {}
