import type { DefineComponent } from 'vue';

export interface AddressBookStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookStack: DefineComponent<AddressBookStackProps>;

export default AddressBookStack;
export { AddressBookStack };
