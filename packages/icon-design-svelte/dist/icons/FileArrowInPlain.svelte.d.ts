import { SvelteComponent } from 'svelte';

export interface FileArrowInPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowInPlain extends SvelteComponent<FileArrowInPlainProps> {}
