import { SvelteComponent } from 'svelte';

export interface DocumentListProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentList extends SvelteComponent<DocumentListProps> {}
