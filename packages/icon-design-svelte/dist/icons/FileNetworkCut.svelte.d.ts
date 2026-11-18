import { SvelteComponent } from 'svelte';

export interface FileNetworkCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileNetworkCut extends SvelteComponent<FileNetworkCutProps> {}
