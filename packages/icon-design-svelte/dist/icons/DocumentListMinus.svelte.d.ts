import { SvelteComponent } from 'svelte';

export interface DocumentListMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListMinus extends SvelteComponent<DocumentListMinusProps> {}
