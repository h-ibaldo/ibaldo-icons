import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookPlain: ForwardRefExoticComponent<AddressBookPlainProps & RefAttributes<SVGSVGElement>>;

export default AddressBookPlain;
export { AddressBookPlain };
