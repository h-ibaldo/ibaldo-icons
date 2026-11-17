import { SvelteComponent } from 'svelte';

export interface CloudUploadBaseTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadBaseTall extends SvelteComponent<CloudUploadBaseTallProps> {}
