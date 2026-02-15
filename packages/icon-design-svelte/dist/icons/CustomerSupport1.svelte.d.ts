import { SvelteComponent } from 'svelte';

export interface CustomerSupport1Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CustomerSupport1 extends SvelteComponent<CustomerSupport1Props> {}
