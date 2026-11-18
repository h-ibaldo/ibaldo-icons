import { SvelteComponent } from 'svelte';

export interface Text2DSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text2DSquareSmall extends SvelteComponent<Text2DSquareSmallProps> {}
