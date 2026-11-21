import { SvelteComponent } from 'svelte';

export interface FileMinusCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileMinusCornerWide extends SvelteComponent<FileMinusCornerWideProps> {}
