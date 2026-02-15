import { SvelteComponent } from 'svelte';

export interface OverscanSettings2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class OverscanSettings2 extends SvelteComponent<OverscanSettings2Props> {}
