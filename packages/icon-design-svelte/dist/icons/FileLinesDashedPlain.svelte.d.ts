import { SvelteComponent } from 'svelte';

export interface FileLinesDashedPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesDashedPlain extends SvelteComponent<FileLinesDashedPlainProps> {}
