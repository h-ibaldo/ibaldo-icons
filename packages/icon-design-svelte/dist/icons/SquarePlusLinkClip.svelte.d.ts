import { SvelteComponent } from 'svelte';

export interface SquarePlusLinkClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePlusLinkClip extends SvelteComponent<SquarePlusLinkClipProps> {}
