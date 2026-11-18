import { SvelteComponent } from 'svelte';

export interface ClosedCaptionSquareSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionSquareSmall extends SvelteComponent<ClosedCaptionSquareSmallProps> {}
