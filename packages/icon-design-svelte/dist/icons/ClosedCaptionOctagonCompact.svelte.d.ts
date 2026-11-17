import { SvelteComponent } from 'svelte';

export interface ClosedCaptionOctagonCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionOctagonCompact extends SvelteComponent<ClosedCaptionOctagonCompactProps> {}
