import { SvelteComponent } from 'svelte';

export interface AddressBookStackClippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookStackClipped extends SvelteComponent<AddressBookStackClippedProps> {}
