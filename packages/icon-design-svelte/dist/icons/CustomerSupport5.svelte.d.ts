import { SvelteComponent } from 'svelte';

export interface CustomerSupport5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CustomerSupport5 extends SvelteComponent<CustomerSupport5Props> {}
