import { SvelteComponent } from 'svelte';

export interface FileXWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXWide extends SvelteComponent<FileXWideProps> {}
