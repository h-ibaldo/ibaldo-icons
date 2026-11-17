import { SvelteComponent } from 'svelte';

export interface AddressBookBoundSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookBoundSharp extends SvelteComponent<AddressBookBoundSharpProps> {}
