import { SvelteComponent } from 'svelte';

export interface AddressBookAtHooksProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookAtHooks extends SvelteComponent<AddressBookAtHooksProps> {}
