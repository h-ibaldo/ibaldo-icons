import { SvelteComponent } from 'svelte';

export interface ClosedCaptionOctagonProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionOctagon extends SvelteComponent<ClosedCaptionOctagonProps> {}
