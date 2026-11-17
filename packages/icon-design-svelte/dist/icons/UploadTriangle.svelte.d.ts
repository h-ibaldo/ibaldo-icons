import { SvelteComponent } from 'svelte';

export interface UploadTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class UploadTriangle extends SvelteComponent<UploadTriangleProps> {}
