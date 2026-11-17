import { SvelteComponent } from 'svelte';

export interface CloudUploadLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadLarge extends SvelteComponent<CloudUploadLargeProps> {}
