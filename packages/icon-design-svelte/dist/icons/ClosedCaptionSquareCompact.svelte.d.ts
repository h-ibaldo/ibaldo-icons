import { SvelteComponent } from 'svelte';

export interface ClosedCaptionSquareCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionSquareCompact extends SvelteComponent<ClosedCaptionSquareCompactProps> {}
