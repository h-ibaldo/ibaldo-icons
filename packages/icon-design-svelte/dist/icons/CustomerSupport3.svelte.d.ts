import { SvelteComponent } from 'svelte';

export interface CustomerSupport3Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CustomerSupport3 extends SvelteComponent<CustomerSupport3Props> {}
