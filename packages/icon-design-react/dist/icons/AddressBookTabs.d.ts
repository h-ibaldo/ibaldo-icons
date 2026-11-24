import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AddressBookTabsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AddressBookTabs: ForwardRefExoticComponent<AddressBookTabsProps & RefAttributes<SVGSVGElement>>;

export default AddressBookTabs;
export { AddressBookTabs };
