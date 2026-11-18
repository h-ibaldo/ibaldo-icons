import { SvelteComponent } from 'svelte';

export interface FileUserDoubleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileUserDouble extends SvelteComponent<FileUserDoubleProps> {}
