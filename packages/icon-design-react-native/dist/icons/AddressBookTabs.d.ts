import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AddressBookTabsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AddressBookTabs: ForwardRefExoticComponent<AddressBookTabsProps & RefAttributes<Svg>>;

export default AddressBookTabs;
export { AddressBookTabs };
