import { SvelteComponent } from 'svelte';

export interface ClosedCaptionBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionBare extends SvelteComponent<ClosedCaptionBareProps> {}
