import { SvelteComponent } from 'svelte';

export interface CloudUploadTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadTall extends SvelteComponent<CloudUploadTallProps> {}
