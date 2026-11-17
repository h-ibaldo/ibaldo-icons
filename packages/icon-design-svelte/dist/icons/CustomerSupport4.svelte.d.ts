import { SvelteComponent } from 'svelte';

export interface CustomerSupport4Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CustomerSupport4 extends SvelteComponent<CustomerSupport4Props> {}
