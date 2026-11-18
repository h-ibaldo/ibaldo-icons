import { SvelteComponent } from 'svelte';

export interface FileNetworkDotsPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileNetworkDotsPlain extends SvelteComponent<FileNetworkDotsPlainProps> {}
