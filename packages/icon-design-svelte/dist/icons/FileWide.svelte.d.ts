import { SvelteComponent } from 'svelte';

export interface FileWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileWide extends SvelteComponent<FileWideProps> {}
