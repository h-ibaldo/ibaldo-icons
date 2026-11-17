import { SvelteComponent } from 'svelte';

export interface FileCodeRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCodeRight extends SvelteComponent<FileCodeRightProps> {}
