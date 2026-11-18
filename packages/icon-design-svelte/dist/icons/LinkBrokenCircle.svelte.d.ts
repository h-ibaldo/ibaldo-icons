import { SvelteComponent } from 'svelte';

export interface LinkBrokenCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenCircle extends SvelteComponent<LinkBrokenCircleProps> {}
