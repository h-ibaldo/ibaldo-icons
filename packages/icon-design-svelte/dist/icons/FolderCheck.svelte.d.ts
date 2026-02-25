import { SvelteComponent } from 'svelte';

export interface FolderCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderCheck extends SvelteComponent<FolderCheckProps> {}
