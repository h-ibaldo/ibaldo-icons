import { SvelteComponent } from 'svelte';

export interface FolderLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderLabel extends SvelteComponent<FolderLabelProps> {}
