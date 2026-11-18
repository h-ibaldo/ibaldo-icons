import { SvelteComponent } from 'svelte';

export interface FileEyePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEyePlain extends SvelteComponent<FileEyePlainProps> {}
