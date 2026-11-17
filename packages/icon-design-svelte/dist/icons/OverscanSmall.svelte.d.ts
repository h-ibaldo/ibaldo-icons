import { SvelteComponent } from 'svelte';

export interface OverscanSmallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OverscanSmall extends SvelteComponent<OverscanSmallProps> {}
