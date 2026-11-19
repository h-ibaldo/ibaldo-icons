import { SvelteComponent } from 'svelte';

export interface FileStackLinesPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackLinesPlain extends SvelteComponent<FileStackLinesPlainProps> {}
