import { SvelteComponent } from 'svelte';

export interface FileTrianglePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileTrianglePlain extends SvelteComponent<FileTrianglePlainProps> {}
