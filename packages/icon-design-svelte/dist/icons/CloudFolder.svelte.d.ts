import { SvelteComponent } from 'svelte';

export interface CloudFolderProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudFolder extends SvelteComponent<CloudFolderProps> {}
