import { SvelteComponent } from 'svelte';

export interface LinkMinusCircleSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkMinusCircleSlanted extends SvelteComponent<LinkMinusCircleSlantedProps> {}
