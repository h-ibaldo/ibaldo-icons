import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookStackClippedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookStackClipped: ForwardRefExoticComponent<AddressBookStackClippedProps & RefAttributes<SVGSVGElement>>;

export default AddressBookStackClipped;
export { AddressBookStackClipped };
