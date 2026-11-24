import { SvelteComponent } from 'svelte';

export interface FileEditCornerPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileEditCornerPlain extends SvelteComponent<FileEditCornerPlainProps> {}
