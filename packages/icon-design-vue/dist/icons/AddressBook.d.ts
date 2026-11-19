import type { DefineComponent } from 'vue';

export interface AddressBookProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBook: DefineComponent<AddressBookProps>;

export default AddressBook;
export { AddressBook };
