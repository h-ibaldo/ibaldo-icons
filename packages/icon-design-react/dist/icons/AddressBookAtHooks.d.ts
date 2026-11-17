import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookAtHooksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookAtHooks: ForwardRefExoticComponent<AddressBookAtHooksProps & RefAttributes<SVGSVGElement>>;

export default AddressBookAtHooks;
export { AddressBookAtHooks };
