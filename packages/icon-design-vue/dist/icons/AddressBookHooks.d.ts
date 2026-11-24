import type { DefineComponent } from 'vue';

export interface AddressBookHooksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookHooks: DefineComponent<AddressBookHooksProps>;

export default AddressBookHooks;
export { AddressBookHooks };
