import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleBarProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleBar extends SvelteComponent<LinkMinusCircleBarProps> {}
