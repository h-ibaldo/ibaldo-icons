import { SvelteComponent } from 'svelte';

export interface FileStackOverlapPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileStackOverlapPlain extends SvelteComponent<FileStackOverlapPlainProps> {}
