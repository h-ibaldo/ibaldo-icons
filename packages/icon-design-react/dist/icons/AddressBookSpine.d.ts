import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookSpineProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookSpine: ForwardRefExoticComponent<AddressBookSpineProps & RefAttributes<SVGSVGElement>>;

export default AddressBookSpine;
export { AddressBookSpine };
