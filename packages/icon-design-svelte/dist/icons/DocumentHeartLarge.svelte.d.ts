import { SvelteComponent } from 'svelte';

export interface DocumentHeartLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DocumentHeartLarge extends SvelteComponent<DocumentHeartLargeProps> {}
