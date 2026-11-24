import type { DefineComponent } from 'vue';

export interface AddressBookAtHooksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const AddressBookAtHooks: DefineComponent<AddressBookAtHooksProps>;

export default AddressBookAtHooks;
export { AddressBookAtHooks };
