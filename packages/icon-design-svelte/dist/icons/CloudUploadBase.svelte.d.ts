import { SvelteComponent } from 'svelte';

export interface CloudUploadBaseProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadBase extends SvelteComponent<CloudUploadBaseProps> {}
