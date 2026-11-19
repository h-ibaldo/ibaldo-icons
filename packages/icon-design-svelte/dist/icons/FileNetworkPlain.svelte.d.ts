import { SvelteComponent } from 'svelte';

export interface FileNetworkPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileNetworkPlain extends SvelteComponent<FileNetworkPlainProps> {}
