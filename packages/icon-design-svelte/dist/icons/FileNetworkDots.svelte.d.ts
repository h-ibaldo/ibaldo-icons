import { SvelteComponent } from 'svelte';

export interface FileNetworkDotsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileNetworkDots extends SvelteComponent<FileNetworkDotsProps> {}
