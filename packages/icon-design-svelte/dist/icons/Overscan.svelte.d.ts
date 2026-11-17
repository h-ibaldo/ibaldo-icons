import { SvelteComponent } from 'svelte';

export interface OverscanProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Overscan extends SvelteComponent<OverscanProps> {}
