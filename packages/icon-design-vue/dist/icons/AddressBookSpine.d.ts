import type { DefineComponent } from 'vue';

export interface AddressBookSpineProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookSpine: DefineComponent<AddressBookSpineProps>;

export default AddressBookSpine;
export { AddressBookSpine };
