import { SvelteComponent } from 'svelte';

export interface CloudUploadLargeTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadLargeTall extends SvelteComponent<CloudUploadLargeTallProps> {}
