import { SvelteComponent } from 'svelte';

export interface DocumentListXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListX extends SvelteComponent<DocumentListXProps> {}
