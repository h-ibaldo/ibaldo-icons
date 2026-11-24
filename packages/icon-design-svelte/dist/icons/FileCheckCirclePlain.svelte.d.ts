import { SvelteComponent } from 'svelte';

export interface FileCheckCirclePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileCheckCirclePlain extends SvelteComponent<FileCheckCirclePlainProps> {}
