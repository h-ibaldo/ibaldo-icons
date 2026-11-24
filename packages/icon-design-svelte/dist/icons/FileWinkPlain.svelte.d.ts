import { SvelteComponent } from 'svelte';

export interface FileWinkPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWinkPlain extends SvelteComponent<FileWinkPlainProps> {}
