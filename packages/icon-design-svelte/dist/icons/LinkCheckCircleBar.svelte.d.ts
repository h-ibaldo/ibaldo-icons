import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleBar extends SvelteComponent<LinkCheckCircleBarProps> {}
