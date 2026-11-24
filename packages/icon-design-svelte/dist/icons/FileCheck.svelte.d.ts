import { SvelteComponent } from 'svelte';

export interface FileCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheck extends SvelteComponent<FileCheckProps> {}
