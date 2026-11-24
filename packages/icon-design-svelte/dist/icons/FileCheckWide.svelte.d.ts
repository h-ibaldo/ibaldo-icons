import { SvelteComponent } from 'svelte';

export interface FileCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckWide extends SvelteComponent<FileCheckWideProps> {}
