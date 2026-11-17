import { SvelteComponent } from 'svelte';

export interface LinkCircleSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleSlanted extends SvelteComponent<LinkCircleSlantedProps> {}
