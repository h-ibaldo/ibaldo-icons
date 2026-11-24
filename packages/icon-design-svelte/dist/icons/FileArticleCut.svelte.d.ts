import { SvelteComponent } from 'svelte';

export interface FileArticleCutProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArticleCut extends SvelteComponent<FileArticleCutProps> {}
