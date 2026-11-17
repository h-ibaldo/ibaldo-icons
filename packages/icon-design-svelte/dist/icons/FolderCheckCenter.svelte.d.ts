import { SvelteComponent } from 'svelte';

export interface FolderCheckCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCheckCenter extends SvelteComponent<FolderCheckCenterProps> {}
