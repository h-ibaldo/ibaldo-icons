import { SvelteComponent } from 'svelte';

export interface ClipboardImageProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClipboardImage extends SvelteComponent<ClipboardImageProps> {}
