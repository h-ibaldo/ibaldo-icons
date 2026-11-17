import { SvelteComponent } from 'svelte';

export interface FolderTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderText extends SvelteComponent<FolderTextProps> {}
