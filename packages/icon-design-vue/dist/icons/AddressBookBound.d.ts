import type { DefineComponent } from 'vue';

export interface AddressBookBoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookBound: DefineComponent<AddressBookBoundProps>;

export default AddressBookBound;
export { AddressBookBound };
