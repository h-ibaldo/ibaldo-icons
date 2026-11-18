import { SvelteComponent } from 'svelte';

export interface LinkPlusCircleSlantedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkPlusCircleSlanted extends SvelteComponent<LinkPlusCircleSlantedProps> {}
