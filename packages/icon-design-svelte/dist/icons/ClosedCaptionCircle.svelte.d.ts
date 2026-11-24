import { SvelteComponent } from 'svelte';

export interface ClosedCaptionCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionCircle extends SvelteComponent<ClosedCaptionCircleProps> {}
