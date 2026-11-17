import { SvelteComponent } from 'svelte';

export interface FolderAlertTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderAlertTriangle extends SvelteComponent<FolderAlertTriangleProps> {}
