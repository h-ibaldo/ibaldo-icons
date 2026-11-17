import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookStack: ForwardRefExoticComponent<AddressBookStackProps & RefAttributes<SVGSVGElement>>;

export default AddressBookStack;
export { AddressBookStack };
