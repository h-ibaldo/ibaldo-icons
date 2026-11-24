import type { DefineComponent } from 'vue';

export interface AddressBookAtProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookAt: DefineComponent<AddressBookAtProps>;

export default AddressBookAt;
export { AddressBookAt };
