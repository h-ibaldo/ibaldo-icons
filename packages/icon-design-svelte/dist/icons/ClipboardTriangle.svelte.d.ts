import { SvelteComponent } from 'svelte';

export interface ClipboardTriangleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardTriangle extends SvelteComponent<ClipboardTriangleProps> {}
