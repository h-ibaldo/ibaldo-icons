import { SvelteComponent } from 'svelte';

export interface ImageWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageWide extends SvelteComponent<ImageWideProps> {}
