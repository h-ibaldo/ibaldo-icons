import { SvelteComponent } from 'svelte';

export interface OverscanSettings3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OverscanSettings3 extends SvelteComponent<OverscanSettings3Props> {}
