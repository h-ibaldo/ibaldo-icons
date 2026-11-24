import { SvelteComponent } from 'svelte';

export interface FileArrowOutPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowOutPlain extends SvelteComponent<FileArrowOutPlainProps> {}
