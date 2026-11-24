import { SvelteComponent } from 'svelte';

export interface DocumentListEditProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListEdit extends SvelteComponent<DocumentListEditProps> {}
