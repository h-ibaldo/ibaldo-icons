import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleClip extends SvelteComponent<LinkMinusCircleClipProps> {}
