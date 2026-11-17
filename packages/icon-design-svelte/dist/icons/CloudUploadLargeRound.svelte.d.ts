import { SvelteComponent } from 'svelte';

export interface CloudUploadLargeRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadLargeRound extends SvelteComponent<CloudUploadLargeRoundProps> {}
