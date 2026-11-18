import { SvelteComponent } from 'svelte';

export interface DocumentListXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListXCircle extends SvelteComponent<DocumentListXCircleProps> {}
