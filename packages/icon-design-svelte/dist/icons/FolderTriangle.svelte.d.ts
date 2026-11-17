import { SvelteComponent } from 'svelte';

export interface FolderTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderTriangle extends SvelteComponent<FolderTriangleProps> {}
