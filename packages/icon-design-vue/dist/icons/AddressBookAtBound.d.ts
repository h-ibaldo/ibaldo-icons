import type { DefineComponent } from 'vue';

export interface AddressBookAtBoundProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookAtBound: DefineComponent<AddressBookAtBoundProps>;

export default AddressBookAtBound;
export { AddressBookAtBound };
