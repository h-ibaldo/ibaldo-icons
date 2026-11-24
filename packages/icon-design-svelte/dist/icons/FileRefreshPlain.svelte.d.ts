import { SvelteComponent } from 'svelte';

export interface FileRefreshPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileRefreshPlain extends SvelteComponent<FileRefreshPlainProps> {}
