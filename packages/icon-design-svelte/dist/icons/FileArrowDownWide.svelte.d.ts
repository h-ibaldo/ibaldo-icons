import { SvelteComponent } from 'svelte';

export interface FileArrowDownWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArrowDownWide extends SvelteComponent<FileArrowDownWideProps> {}
