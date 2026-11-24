import { SvelteComponent } from 'svelte';

export interface FileKeyCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileKeyCut extends SvelteComponent<FileKeyCutProps> {}
