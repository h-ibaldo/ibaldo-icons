import { SvelteComponent } from 'svelte';

export interface AddressBookStackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookStack extends SvelteComponent<AddressBookStackProps> {}
