import { SvelteComponent } from 'svelte';

export interface ClosedCaptionCircleSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionCircleSmall extends SvelteComponent<ClosedCaptionCircleSmallProps> {}
