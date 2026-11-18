import { SvelteComponent } from 'svelte';

export interface FileEditPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditPlain extends SvelteComponent<FileEditPlainProps> {}
