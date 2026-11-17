import { SvelteComponent } from 'svelte';

export interface AddressBookPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookPlain extends SvelteComponent<AddressBookPlainProps> {}
