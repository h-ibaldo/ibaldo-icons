import { SvelteComponent } from 'svelte';

export interface AddressBookHooksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookHooks extends SvelteComponent<AddressBookHooksProps> {}
