import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleClipProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleClip extends SvelteComponent<LinkCheckCircleClipProps> {}
