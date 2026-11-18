import { SvelteComponent } from 'svelte';

export interface DocumentListTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListTriangle extends SvelteComponent<DocumentListTriangleProps> {}
