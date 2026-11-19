import { SvelteComponent } from 'svelte';

export interface FileArticlePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArticlePlain extends SvelteComponent<FileArticlePlainProps> {}
