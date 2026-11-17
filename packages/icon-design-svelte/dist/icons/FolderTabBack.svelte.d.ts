import { SvelteComponent } from 'svelte';

export interface FolderTabBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderTabBack extends SvelteComponent<FolderTabBackProps> {}
