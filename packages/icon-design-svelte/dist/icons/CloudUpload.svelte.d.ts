import { SvelteComponent } from 'svelte';

export interface CloudUploadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUpload extends SvelteComponent<CloudUploadProps> {}
