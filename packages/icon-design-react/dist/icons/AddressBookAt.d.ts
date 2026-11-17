import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookAtProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookAt: ForwardRefExoticComponent<AddressBookAtProps & RefAttributes<SVGSVGElement>>;

export default AddressBookAt;
export { AddressBookAt };
