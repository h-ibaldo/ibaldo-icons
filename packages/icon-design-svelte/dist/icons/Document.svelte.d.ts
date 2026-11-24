import { SvelteComponent } from 'svelte';

export interface DocumentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Document extends SvelteComponent<DocumentProps> {}
