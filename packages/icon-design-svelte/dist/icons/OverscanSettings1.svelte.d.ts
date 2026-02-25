import { SvelteComponent } from 'svelte';

export interface OverscanSettings1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OverscanSettings1 extends SvelteComponent<OverscanSettings1Props> {}
