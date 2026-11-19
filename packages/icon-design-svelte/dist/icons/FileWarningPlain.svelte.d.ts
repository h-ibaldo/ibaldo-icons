import { SvelteComponent } from 'svelte';

export interface FileWarningPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWarningPlain extends SvelteComponent<FileWarningPlainProps> {}
