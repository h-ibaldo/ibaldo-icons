import { SvelteComponent } from 'svelte';

export interface SquareStackLinkSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquareStackLinkSlanted extends SvelteComponent<SquareStackLinkSlantedProps> {}
