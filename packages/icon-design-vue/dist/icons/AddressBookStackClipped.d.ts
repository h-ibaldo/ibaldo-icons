import type { DefineComponent } from 'vue';

export interface AddressBookStackClippedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookStackClipped: DefineComponent<AddressBookStackClippedProps>;

export default AddressBookStackClipped;
export { AddressBookStackClipped };
