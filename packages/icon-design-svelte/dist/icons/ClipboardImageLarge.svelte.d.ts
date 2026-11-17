import { SvelteComponent } from 'svelte';

export interface ClipboardImageLargeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardImageLarge extends SvelteComponent<ClipboardImageLargeProps> {}
