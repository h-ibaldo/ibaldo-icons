import { SvelteComponent } from 'svelte';

export interface SquarePlusLinkSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SquarePlusLinkSlanted extends SvelteComponent<SquarePlusLinkSlantedProps> {}
