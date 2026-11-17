import { SvelteComponent } from 'svelte';

export interface CustomerSupport2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CustomerSupport2 extends SvelteComponent<CustomerSupport2Props> {}
