import type { DefineComponent } from 'vue';

export interface AddressBookBoundSharpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookBoundSharp: DefineComponent<AddressBookBoundSharpProps>;

export default AddressBookBoundSharp;
export { AddressBookBoundSharp };
