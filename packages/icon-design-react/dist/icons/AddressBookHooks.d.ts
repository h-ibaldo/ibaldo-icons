import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookHooksProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookHooks: ForwardRefExoticComponent<AddressBookHooksProps & RefAttributes<SVGSVGElement>>;

export default AddressBookHooks;
export { AddressBookHooks };
