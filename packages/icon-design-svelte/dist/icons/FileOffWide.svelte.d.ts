import { SvelteComponent } from 'svelte';

export interface FileOffWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileOffWide extends SvelteComponent<FileOffWideProps> {}
