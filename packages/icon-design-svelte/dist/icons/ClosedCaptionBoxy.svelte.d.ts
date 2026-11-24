import { SvelteComponent } from 'svelte';

export interface ClosedCaptionBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ClosedCaptionBoxy extends SvelteComponent<ClosedCaptionBoxyProps> {}
