import { SvelteComponent } from 'svelte';

export interface FolderPlusCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderPlusCenter extends SvelteComponent<FolderPlusCenterProps> {}
