import { SvelteComponent } from 'svelte';

export interface FolderInnerLabelProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderInnerLabel extends SvelteComponent<FolderInnerLabelProps> {}
