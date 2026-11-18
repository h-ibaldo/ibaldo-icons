import { SvelteComponent } from 'svelte';

export interface FileCheckCircleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckCircleCut extends SvelteComponent<FileCheckCircleCutProps> {}
