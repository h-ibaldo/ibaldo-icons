import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBook: ForwardRefExoticComponent<AddressBookProps & RefAttributes<SVGSVGElement>>;

export default AddressBook;
export { AddressBook };
