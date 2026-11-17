import { SvelteComponent } from 'svelte';

export interface AddressBookBoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookBound extends SvelteComponent<AddressBookBoundProps> {}
