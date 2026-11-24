import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookBoundSharpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookBoundSharp: ForwardRefExoticComponent<AddressBookBoundSharpProps & RefAttributes<SVGSVGElement>>;

export default AddressBookBoundSharp;
export { AddressBookBoundSharp };
