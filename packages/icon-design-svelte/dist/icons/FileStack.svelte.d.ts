import { SvelteComponent } from 'svelte';

export interface FileStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStack extends SvelteComponent<FileStackProps> {}
