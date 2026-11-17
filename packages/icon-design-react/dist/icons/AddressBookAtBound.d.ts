import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookAtBoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookAtBound: ForwardRefExoticComponent<AddressBookAtBoundProps & RefAttributes<SVGSVGElement>>;

export default AddressBookAtBound;
export { AddressBookAtBound };
