import { SvelteComponent } from 'svelte';

export interface ImageHillsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageHills extends SvelteComponent<ImageHillsProps> {}
