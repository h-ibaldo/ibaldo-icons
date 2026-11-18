import { SvelteComponent } from 'svelte';

export interface DocumentHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentHeart extends SvelteComponent<DocumentHeartProps> {}
