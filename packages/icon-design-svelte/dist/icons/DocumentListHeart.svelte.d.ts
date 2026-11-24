import { SvelteComponent } from 'svelte';

export interface DocumentListHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListHeart extends SvelteComponent<DocumentListHeartProps> {}
