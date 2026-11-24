import type { DefineComponent } from 'vue';

export interface AddressBookTabsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookTabs: DefineComponent<AddressBookTabsProps>;

export default AddressBookTabs;
export { AddressBookTabs };
