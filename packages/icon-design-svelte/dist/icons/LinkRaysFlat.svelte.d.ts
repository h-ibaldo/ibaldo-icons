import { SvelteComponent } from 'svelte';

export interface LinkRaysFlatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LinkRaysFlat extends SvelteComponent<LinkRaysFlatProps> {}
