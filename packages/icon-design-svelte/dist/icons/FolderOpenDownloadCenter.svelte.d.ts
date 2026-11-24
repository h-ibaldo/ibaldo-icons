import { SvelteComponent } from 'svelte';

export interface FolderOpenDownloadCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpenDownloadCenter extends SvelteComponent<FolderOpenDownloadCenterProps> {}
