import { SvelteComponent } from 'svelte';

export interface FileXCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileXCornerWide extends SvelteComponent<FileXCornerWideProps> {}
