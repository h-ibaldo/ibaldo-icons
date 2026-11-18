import { SvelteComponent } from 'svelte';

export interface DocumentListMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListMinusCircle extends SvelteComponent<DocumentListMinusCircleProps> {}
