import { SvelteComponent } from 'svelte';

export interface ClosedCaptionCircleCompactProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionCircleCompact extends SvelteComponent<ClosedCaptionCircleCompactProps> {}
