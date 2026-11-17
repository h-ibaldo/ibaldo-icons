import { SvelteComponent } from 'svelte';

export interface SunFacetedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SunFaceted extends SvelteComponent<SunFacetedProps> {}
