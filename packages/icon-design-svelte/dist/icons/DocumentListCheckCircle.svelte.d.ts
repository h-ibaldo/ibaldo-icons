import { SvelteComponent } from 'svelte';

export interface DocumentListCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentListCheckCircle extends SvelteComponent<DocumentListCheckCircleProps> {}
