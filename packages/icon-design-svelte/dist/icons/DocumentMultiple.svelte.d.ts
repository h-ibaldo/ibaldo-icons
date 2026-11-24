import { SvelteComponent } from 'svelte';

export interface DocumentMultipleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentMultiple extends SvelteComponent<DocumentMultipleProps> {}
