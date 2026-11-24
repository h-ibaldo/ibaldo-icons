import { SvelteComponent } from 'svelte';

export interface AddressBookAtBoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookAtBound extends SvelteComponent<AddressBookAtBoundProps> {}
