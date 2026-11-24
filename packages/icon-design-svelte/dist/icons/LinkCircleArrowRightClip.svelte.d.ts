import { SvelteComponent } from 'svelte';

export interface LinkCircleArrowRightClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleArrowRightClip extends SvelteComponent<LinkCircleArrowRightClipProps> {}
