import type { DefineComponent } from 'vue';

export interface AddressBookPlainProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookPlain: DefineComponent<AddressBookPlainProps>;

export default AddressBookPlain;
export { AddressBookPlain };
