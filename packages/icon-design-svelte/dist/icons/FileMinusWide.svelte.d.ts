import { SvelteComponent } from 'svelte';

export interface FileMinusWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusWide extends SvelteComponent<FileMinusWideProps> {}
