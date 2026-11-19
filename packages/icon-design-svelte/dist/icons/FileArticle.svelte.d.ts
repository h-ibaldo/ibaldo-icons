import { SvelteComponent } from 'svelte';

export interface FileArticleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FileArticle extends SvelteComponent<FileArticleProps> {}
