import { SvelteComponent } from 'svelte';

export interface AddressBookTabsProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AddressBookTabs extends SvelteComponent<AddressBookTabsProps> {}
