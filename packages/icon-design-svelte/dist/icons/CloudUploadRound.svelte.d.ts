import { SvelteComponent } from 'svelte';

export interface CloudUploadRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudUploadRound extends SvelteComponent<CloudUploadRoundProps> {}
