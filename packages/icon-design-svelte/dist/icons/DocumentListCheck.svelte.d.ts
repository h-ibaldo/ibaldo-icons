import { SvelteComponent } from 'svelte';

export interface DocumentListCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListCheck extends SvelteComponent<DocumentListCheckProps> {}
