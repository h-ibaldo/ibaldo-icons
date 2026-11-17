import { SvelteComponent } from 'svelte';

export interface AddressBookSpineProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookSpine extends SvelteComponent<AddressBookSpineProps> {}
