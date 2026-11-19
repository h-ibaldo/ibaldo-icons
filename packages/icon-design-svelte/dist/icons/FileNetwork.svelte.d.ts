import { SvelteComponent } from 'svelte';

export interface FileNetworkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileNetwork extends SvelteComponent<FileNetworkProps> {}
