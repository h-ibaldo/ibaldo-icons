import { SvelteComponent } from 'svelte';

export interface CloudFolderTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudFolderTall extends SvelteComponent<CloudFolderTallProps> {}
