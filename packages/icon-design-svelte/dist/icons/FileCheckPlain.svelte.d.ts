import { SvelteComponent } from 'svelte';

export interface FileCheckPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckPlain extends SvelteComponent<FileCheckPlainProps> {}
