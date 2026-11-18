import { SvelteComponent } from 'svelte';

export interface ImageSquareDashedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ImageSquareDashed extends SvelteComponent<ImageSquareDashedProps> {}
