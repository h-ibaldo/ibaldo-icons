import { SvelteComponent } from 'svelte';

export interface DocumentListPlusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListPlusCircle extends SvelteComponent<DocumentListPlusCircleProps> {}
