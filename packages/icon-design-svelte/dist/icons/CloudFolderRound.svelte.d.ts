import { SvelteComponent } from 'svelte';

export interface CloudFolderRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudFolderRound extends SvelteComponent<CloudFolderRoundProps> {}
