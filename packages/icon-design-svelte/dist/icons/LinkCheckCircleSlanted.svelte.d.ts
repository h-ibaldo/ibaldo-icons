import { SvelteComponent } from 'svelte';

export interface LinkCheckCircleSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkCheckCircleSlanted extends SvelteComponent<LinkCheckCircleSlantedProps> {}
