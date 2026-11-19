import { SvelteComponent } from 'svelte';

export interface FileStampPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStampPlain extends SvelteComponent<FileStampPlainProps> {}
