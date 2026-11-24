import { SvelteComponent } from 'svelte';

export interface Text3DSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Text3DSquareSmall extends SvelteComponent<Text3DSquareSmallProps> {}
