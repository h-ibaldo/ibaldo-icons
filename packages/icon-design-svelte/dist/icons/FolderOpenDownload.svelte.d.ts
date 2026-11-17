import { SvelteComponent } from 'svelte';

export interface FolderOpenDownloadProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FolderOpenDownload extends SvelteComponent<FolderOpenDownloadProps> {}
