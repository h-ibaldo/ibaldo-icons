import { SvelteComponent } from 'svelte';

export interface LinkCircleCheckSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCircleCheckSlanted extends SvelteComponent<LinkCircleCheckSlantedProps> {}
