import { SvelteComponent } from 'svelte';

export interface ClosedCaptionProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaption extends SvelteComponent<ClosedCaptionProps> {}
