import { SvelteComponent } from 'svelte';

export interface FileLinesDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileLinesDashed extends SvelteComponent<FileLinesDashedProps> {}
