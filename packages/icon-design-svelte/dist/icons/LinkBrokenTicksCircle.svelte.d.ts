import { SvelteComponent } from 'svelte';

export interface LinkBrokenTicksCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkBrokenTicksCircle extends SvelteComponent<LinkBrokenTicksCircleProps> {}
