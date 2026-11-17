import { SvelteComponent } from 'svelte';

export interface FileStackLinkProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackLink extends SvelteComponent<FileStackLinkProps> {}
