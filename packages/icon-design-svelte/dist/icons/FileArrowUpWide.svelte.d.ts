import { SvelteComponent } from 'svelte';

export interface FileArrowUpWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowUpWide extends SvelteComponent<FileArrowUpWideProps> {}
