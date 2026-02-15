import { SvelteComponent } from 'svelte';

export interface FolderCheckedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderChecked extends SvelteComponent<FolderCheckedProps> {}
