import { SvelteComponent } from 'svelte';

export interface FileArrowDownPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownPlain extends SvelteComponent<FileArrowDownPlainProps> {}
