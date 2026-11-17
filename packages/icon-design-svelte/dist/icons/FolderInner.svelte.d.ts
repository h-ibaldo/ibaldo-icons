import { SvelteComponent } from 'svelte';

export interface FolderInnerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderInner extends SvelteComponent<FolderInnerProps> {}
