import { SvelteComponent } from 'svelte';

export interface FileStampProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStamp extends SvelteComponent<FileStampProps> {}
